import StyledResourceDice from "./styles/StyledResourceDice";
import StyledResourceDiceFace from "./styles/StyledResourceDiceFace";
import StyledLock from "./styles/StyledLock";
import { DiceValue } from "../../types/DiceValue";
import TradingPopup from "../Popups/TradingPopup/TradingPopup";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectIsGamePhaseBuilding, selectIsGamePhaseRolling } from "../../store/slices/gameSlice";
import { ResourceType } from "../../constants/resources";

// Dice faces
import ore_face from "../../assets/dice/ore-face.svg";
import wheat_face from "../../assets/dice/wheat-face.svg";
import wool_face from "../../assets/dice/wool-face.svg";
import wood_face from "../../assets/dice/wood-face.svg";
import brick_face from "../../assets/dice/brick-face.svg";
import gold_face from "../../assets/dice/gold-face.svg";
import blank_face from "../../assets/dice/blank_face.svg";
import lock from "../../assets/dice/lock.svg"
import { toggleDiceLock } from "../../store/slices/diceSlice";

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

  const gamePhaseRolling = useAppSelector((state) => selectIsGamePhaseRolling(state))
  const gamePhaseBuilding = useAppSelector((state) => selectIsGamePhaseBuilding(state))

  // Conditional rendering

  const diceFace = (rolling && !isLocked) || diceValue === null
    ? blank_face
    : faceValues[diceValue]

  const canOpenTradePopup = gamePhaseBuilding
    && diceValue == ResourceType.GOLD.id
    && !isSpent
    && isTradeable

  const wobble = rolling && !isLocked

  const pointer = (gamePhaseRolling && diceValue !== null) || isTradeable

  const tooltip = gamePhaseRolling && diceValue !== null && !isLocked
    ? "Lock dice"
    : gamePhaseRolling && diceValue !== null && isLocked
      ? "Unlock dice"
      : isTradeable
        ? "Trade gold"
        : ""

  // Event handlers

  function handleClick() {
    if (gamePhaseRolling
      && diceValue !== null) {
      dispatch(toggleDiceLock(diceId))
    }

    if (gamePhaseBuilding) {
      // TODO: handle resource joker setting

      if (isTradeable) {
        setTradingPopupOpen(!tradingPopupOpen);
      }
    }
  }

  function handleCloseTradePopup() {
    setTradingPopupOpen(false);
  }

  return (
    <StyledResourceDice title={tooltip} $pointer={pointer}>
      <TradingPopup
        diceId={diceId}
        disabled={!tradingPopupOpen}
        onClose={handleCloseTradePopup} />
      <StyledResourceDiceFace
        src={diceFace}
        onClick={handleClick}
        $width={diceWidth}
        $grayscale={isSpent}
        $pulse={canOpenTradePopup}
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
