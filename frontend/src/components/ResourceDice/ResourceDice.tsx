import StyledResourceDice from "./styles/StyledResourceDice";
import StyledResourceDiceFace from "./styles/StyledResourceDiceFace";
import StyledLock from "./styles/StyledLock";
import { DiceValue } from "../../types/DiceValue";
import { GamePhase, ResourceType } from "../../constants/enumerations";
import TradingPopup from "../Popups/TradingPopup/TradingPopup";
import { useState } from "react";

// Dice faces
import ore_face from "../../assets/dice/ore-face.svg";
import wheat_face from "../../assets/dice/wheat-face.svg";
import wool_face from "../../assets/dice/wool-face.svg";
import wood_face from "../../assets/dice/wood-face.svg";
import brick_face from "../../assets/dice/brick-face.svg";
import gold_face from "../../assets/dice/gold-face.svg";
import blank_face from "../../assets/dice/blank_face.svg";
import lock from "../../assets/dice/lock.svg"

interface ResourceDiceProps {
  id: number;
  value: DiceValue;
  rolling: boolean;
  rollDurationMilliseconds: number,
  isLocked: boolean;
  isSpent: boolean;
  isTradeable: boolean;
  currentGamePhase: GamePhase;
  onToggleDiceLocked: (id: number) => void
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
  const [showTradingPopup, setShowTradingPopup] = useState(false);

  // Helpers for evaluating current game phase
  const isGamePhaseRolling = props.currentGamePhase == GamePhase.Rolling
  const isGamePhaseBuilding = props.currentGamePhase == GamePhase.Building

  // Conditionally render dice face
  const diceFace = (props.rolling && !props.isLocked) || props.value === null
    ? blank_face
    : faceValues[props.value]

  // Dice face should conditionally pulse and open a popup if tradeable and in building game phase
  const isTradeable = isGamePhaseBuilding
    && props.value == ResourceType.Gold
    && props.isTradeable

  // Dice face should wobble when rolling and unlocked
  const wobble = props.rolling && !props.isLocked

  // Cursor should be pointer if it meets conditions to handleClick
  const pointer = (isGamePhaseRolling && props.value !== null) || isTradeable

  const tooltip = isGamePhaseRolling && props.value !== null && !props.isLocked
    ? "Lock dice"
    : isGamePhaseRolling && props.value !== null && props.isLocked
      ? "Unlock dice"
      : isTradeable
        ? "Trade gold"
        : ""

  function handleClick() {
    if (isGamePhaseRolling
      && props.value !== null) {
      props.onToggleDiceLocked(props.id)
    }

    if ((isGamePhaseBuilding && isTradeable)) {
      setShowTradingPopup(!showTradingPopup);
    }
  }

  function handleCloseTradePopup() {
    setShowTradingPopup(false);
  }

  return (
    <StyledResourceDice title={tooltip} $pointer={pointer}>
      <TradingPopup
        diceId={props.id}
        disabled={!showTradingPopup}
        onClose={handleCloseTradePopup} />
      <StyledResourceDiceFace
        width={`${diceWidth}%`}
        src={diceFace}
        onClick={handleClick}
        $grayscale={props.isSpent}
        $pulse={isTradeable}
        $wobble={wobble}
        $wobbleDurationMilliseconds={props.rollDurationMilliseconds} />
      <StyledLock
        width={`${diceWidth * 0.25}%`}
        src={lock}
        $locked={props.isLocked} />
    </StyledResourceDice>
  );
};

export default ResourceDice;
