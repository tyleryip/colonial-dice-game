import StyledResourceDice from "./styles/StyledResourceDice";
import { DiceValue } from "../../../types/DiceValue";
import TradingPopup from "../../Popups/TradingPopup/TradingPopup";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  selectIslandOneIsGamePhaseBuilding,
  selectIslandOneIsGamePhaseRolling,
} from "../../../store/slices/session/islandOne/gameSlice/islandOneGameSlice";
import { getResourceType, ResourceType } from "../../../constants/resources";
import {
  islandOneToggleDiceLock,
  selectIslandOneResourceJokerFlag,
  islandOneSetDice,
  islandOneClearResourceJokerFlag,
  islandOneSpendDice,
} from "../../../store/slices/session/islandOne/diceSlice/islandOneDiceSlice";
import tradeGoldSound from "/audio/trade_gold.wav"
import lockSound from "/audio/lock.wav";
import unlockSound from "/audio/unlock.wav";
import jokerSetDiceSound from "/audio/joker_set_dice.wav";
import useSound from "use-sound";
import { selectEffectiveVolume } from "../../../store/slices/local/settingsSlice/settingsSlice";
import selectionOpenSound from '/audio/selection_open.wav'
import selectionCloseSound from '/audio/selection_close.wav'
import dice_blank from '/assets/dice-faces/dice-blank.png'
import dice_brick from '/assets/dice-faces/dice-brick.png'
import dice_gold from '/assets/dice-faces/dice-gold.png'
import dice_ore from '/assets/dice-faces/dice-ore.png'
import dice_wheat from '/assets/dice-faces/dice-wheat.png'
import dice_wood from '/assets/dice-faces/dice-wood.png'
import dice_wool from '/assets/dice-faces/dice-wool.png'
import StyledResourceDiceFace from "./styles/StyledResourceDiceFace";
import StyledLock from "./styles/StyledLock";
import lock from "/assets/dice-faces/lock.svg";
import { SetDicePayload } from "../../../store/slices/session/shared/diceSlice";
import { islandOneResetActiveResourceJoker, selectIslandOneActiveResourceJoker } from "../../../store/slices/session/islandOne/resourceJokerSlice/islandOneResourceJokerSlice";
import { islandOneSpendKnight } from "../../../store/slices/session/islandOne/knightSlice/islandOneKnightSlice";

interface ResourceDiceProps {
  id: number;
  value: DiceValue;
  rolling: boolean;
  rollDurationMilliseconds: number;
  isLocked: boolean;
  isSpent: boolean;
  isTradeable: boolean;
}

const diceFaces = [
  dice_ore,
  dice_wheat,
  dice_wool,
  dice_wood,
  dice_brick,
  dice_gold
]

const ResourceDice = (props: ResourceDiceProps) => {
  // Props and constants
  const diceId = props.id;
  const diceValue = props.value;
  const isLocked = props.isLocked;
  const isSpent = props.isSpent;
  const rolling = props.rolling;
  const rollDurationMilliseconds = props.rollDurationMilliseconds;
  const isTradeable = props.isTradeable;
  const [tradingPopupOpen, setTradingPopupOpen] = useState(false);

  // Dispatch

  const dispatch = useAppDispatch();

  // Selectors

  const gamePhaseRolling = useAppSelector(state =>
    selectIslandOneIsGamePhaseRolling(state)
  );
  const gamePhaseBuilding = useAppSelector(state =>
    selectIslandOneIsGamePhaseBuilding(state)
  );
  const resourceJokerFlag = useAppSelector(state =>
    selectIslandOneResourceJokerFlag(state)
  );
  const activeResourceJoker = useAppSelector(state =>
    selectIslandOneActiveResourceJoker(state)
  )
  const volume = useAppSelector(state =>
    selectEffectiveVolume(state)
  );

  // Conditional rendering

  const canOpenTradePopup =
    gamePhaseBuilding &&
    diceValue == ResourceType.GOLD.id &&
    !isSpent &&
    isTradeable;

  const canSetWithResourceJoker =
    gamePhaseBuilding &&
    resourceJokerFlag != null &&
    activeResourceJoker != null &&
    !isSpent;

  const wobble = rolling && !isLocked;

  const pulse =
    canOpenTradePopup || canSetWithResourceJoker;

  const pointer =
    (gamePhaseRolling && diceValue !== null) ||
    canOpenTradePopup ||
    canSetWithResourceJoker;

  const getTooltip = (): string => {
    if (gamePhaseRolling && diceValue != null) {
      return isLocked ? "Unlock dice" : "Lock dice";
    }

    if (gamePhaseBuilding && resourceJokerFlag != null && !isSpent) {
      return `Set to ${getResourceType(resourceJokerFlag).toString()}`;
    }

    return canOpenTradePopup ? "Trade gold" : "";
  };

  const getTradingPopupTooltip = (resourceType: ResourceType) => {
    return `Trade for ${resourceType.name}`;
  };

  /**
   * Given the dice's state and value, return the face it should render
   * @returns The appropriate dice face string
   */
  const getDiceFace = (): string => {
    if (diceValue === null || (rolling && !isLocked)) {
      return dice_blank
    }

    return diceFaces[diceValue];
  }

  // Sound effects

  const [playTradeGoldSound] = useSound(tradeGoldSound, {
    volume: volume,
    interrupt: false
  })
  const [playLockSound] = useSound(lockSound, {
    volume: volume,
    interrupt: false
  })
  const [playUnlockSound] = useSound(unlockSound, {
    volume: volume,
    interrupt: false
  })
  const [playJokerSetDiceSound] = useSound(jokerSetDiceSound, {
    volume: volume,
    interrupt: false
  })
  const [playSelectionOpenSound] = useSound(selectionOpenSound, {
    volume: volume
  })
  const [playSelectionCloseSound] = useSound(selectionCloseSound, {
    volume: volume
  })

  // Event handlers

  const handleClick = () => {
    if (gamePhaseRolling && diceValue !== null) {
      if (isLocked) {
        playUnlockSound();
      }
      if (!isLocked) {
        playLockSound();
      }
      dispatch(islandOneToggleDiceLock(diceId));
      return;
    }

    if (gamePhaseBuilding && !isSpent) {
      // Resource and wildcard joker setting takes priority over gold trading


      if (resourceJokerFlag != null && activeResourceJoker != null) {
        playJokerSetDiceSound();

        dispatch(
          islandOneSetDice({ id: diceId, value: resourceJokerFlag as DiceValue })
        );

        // After setting the dice, we can safely clear the resource joker flag
        dispatch(islandOneClearResourceJokerFlag());

        dispatch(islandOneSpendKnight(activeResourceJoker));

        // After spending the knight, we can safely clear the active resource joker
        dispatch(islandOneResetActiveResourceJoker());

        return; // Prevent setting a gold dice from also opening up the trading popup
      }

      if (canOpenTradePopup) {
        playSelectionOpenSound();

        setTradingPopupOpen(!tradingPopupOpen);
      }
    }
  };

  const handleTradePopupClick = (resourceId: number) => {
    const setDicePayload: SetDicePayload = {
      id: diceId,
      value: resourceId as DiceValue,
    };

    playTradeGoldSound()

    dispatch(islandOneSetDice(setDicePayload))
    dispatch(islandOneSpendDice(JSON.stringify(ResourceType.GOLD)))

    setTradingPopupOpen(false);
  };

  const handleCloseTradePopup = () => {
    if (tradingPopupOpen) {
      playSelectionCloseSound()

      setTradingPopupOpen(false)
    }
  };

  return (
    <StyledResourceDice title={getTooltip()} $pointer={pointer}>
      <TradingPopup
        tooltip={getTradingPopupTooltip}
        disabled={!tradingPopupOpen}
        onClick={handleTradePopupClick}
        onClose={handleCloseTradePopup}
      />
      <StyledResourceDiceFace
        onClick={handleClick}
        src={getDiceFace()}
        $wobble={wobble}
        $wobbleDurationMilliseconds={rollDurationMilliseconds}
        $pulse={pulse}
        $isSpent={isSpent} />
      <StyledLock src={lock} $locked={isLocked} />
    </StyledResourceDice>
  );
};

export default ResourceDice;
