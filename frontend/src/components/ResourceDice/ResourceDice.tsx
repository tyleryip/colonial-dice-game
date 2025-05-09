import StyledResourceDice from "./styles/StyledResourceDice";
import StyledResourceDiceFace from "./styles/StyledResourceDiceFace";
import StyledLock from "./styles/StyledLock";
import { DiceValue } from "../../types/DiceValue";
import TradingPopup from "../Popups/TradingPopup/TradingPopup";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectIsGamePhaseBuilding, selectIsGamePhaseRolling } from "../../store/slices/gameSlice";
import { getResourceType, ResourceType } from "../../constants/resources";

// Dice faces
import ore_face from "../../assets/dice/ore-face.svg";
import wheat_face from "../../assets/dice/wheat-face.svg";
import wool_face from "../../assets/dice/wool-face.svg";
import wood_face from "../../assets/dice/wood-face.svg";
import brick_face from "../../assets/dice/brick-face.svg";
import gold_face from "../../assets/dice/gold-face.svg";
import blank_face from "../../assets/dice/blank_face.svg";
import lock from "../../assets/dice/lock.svg"
import { toggleDiceLock, selectResourceJokerFlag, setDice, clearResourceJokerFlag, SetDicePayload, spendDice } from "../../store/slices/diceSlice";
import { spendResourceJoker } from "../../store/slices/resourceJokerSlice";

interface ResourceDiceProps {
  id: number;
  value: DiceValue;
  rolling: boolean;
  rollDurationMilliseconds: number,
  isLocked: boolean;
  isSpent: boolean;
  isTradeable: boolean;
}

const faceValues = [
  ore_face,
  wheat_face,
  wool_face,
  wood_face,
  brick_face,
  gold_face,
];

const diceWidth = 100;

const ResourceDice = (props: ResourceDiceProps) => {
  // Props and constants
  const diceId = props.id
  const diceValue = props.value
  const isLocked = props.isLocked
  const isSpent = props.isSpent
  const rolling = props.rolling
  const isTradeable = props.isTradeable
  const [tradingPopupOpen, setTradingPopupOpen] = useState(false);

  // Dispatch

  const dispatch = useAppDispatch();

  // Selectors

  const gamePhaseRolling = useAppSelector(state => selectIsGamePhaseRolling(state))
  const gamePhaseBuilding = useAppSelector(state => selectIsGamePhaseBuilding(state))
  const resourceJokerFlag = useAppSelector(state => selectResourceJokerFlag(state))

  // Conditional rendering

  const diceFace = (rolling && !isLocked) || diceValue === null
    ? blank_face
    : faceValues[diceValue]

  const canOpenTradePopup =
    gamePhaseBuilding
    && diceValue == ResourceType.GOLD.id
    && !isSpent
    && isTradeable

  const canSetWithResourceJoker =
    gamePhaseBuilding
    && resourceJokerFlag != null
    && !isSpent

  const wobble = rolling && !isLocked

  const pointer =
    (gamePhaseRolling && diceValue !== null)
    || canOpenTradePopup
    || canSetWithResourceJoker

  const getTooltip = (): string => {
    if (gamePhaseRolling && diceValue != null) {
      return isLocked ? "Unlock dice" : "Lock dice"
    }

    if (gamePhaseBuilding && resourceJokerFlag != null) {
      return `Set to ${getResourceType(resourceJokerFlag).toString()}`
    }

    return isTradeable ? "Trade gold" : ""
  }

  const getTradingPopupTooltip = (resourceType: ResourceType) => {
    return `Trade for ${resourceType.name}`;
  }

  // Event handlers

  const handleClick = () => {
    if (gamePhaseRolling
      && diceValue !== null) {
      dispatch(toggleDiceLock(diceId))
      return
    }

    if (gamePhaseBuilding) {
      // Resource joker setting takes priority over gold trading
      if (resourceJokerFlag != null) {
        dispatch(setDice({ id: diceId, value: resourceJokerFlag as DiceValue }))
        dispatch(clearResourceJokerFlag())
        dispatch(spendResourceJoker(resourceJokerFlag))
        return; // Prevent setting a gold dice from also opening up the trading popup
      }

      if (isTradeable) {
        setTradingPopupOpen(!tradingPopupOpen);
      }
    }
  }

  const handleTradePopupClick = (resourceId: number) => {
    const setDicePayload: SetDicePayload = {
      id: diceId,
      value: resourceId as DiceValue
    }

    dispatch(setDice(setDicePayload))
    dispatch(spendDice(JSON.stringify(ResourceType.GOLD)))

    handleCloseTradePopup();
  }

  const handleCloseTradePopup = () => {
    setTradingPopupOpen(false);
  }

  return (
    <StyledResourceDice title={getTooltip()} $pointer={pointer}>
      <TradingPopup
        tooltip={getTradingPopupTooltip}
        disabled={!tradingPopupOpen}
        onClick={handleTradePopupClick}
        onClose={handleCloseTradePopup} />
      <StyledResourceDiceFace
        src={diceFace}
        onClick={handleClick}
        $width={diceWidth}
        $grayscale={isSpent}
        $pulse={canOpenTradePopup || canSetWithResourceJoker}
        $wobble={wobble}
        $wobbleDurationMilliseconds={props.rollDurationMilliseconds} />
      <StyledLock
        width={`${diceWidth * 0.25}%`}
        src={lock}
        $locked={isLocked} />
    </StyledResourceDice>
  );
};

export default ResourceDice;
