import StyledResourceDice from "./styles/StyledResourceDice";
import StyledResourceDiceFace from "./styles/StyledResourceDiceFace";

// Dice faces
import ore_face from "../../assets/dice/ore-face.svg";
import wheat_face from "../../assets/dice/wheat-face.svg";
import wool_face from "../../assets/dice/wool-face.svg";
import wood_face from "../../assets/dice/wood-face.svg";
import brick_face from "../../assets/dice/brick-face.svg";
import gold_face from "../../assets/dice/gold-face.svg";
import blank_face from "../../assets/dice/blank_face.svg";
import lock from "../../assets/dice/lock.svg"
import StyledLock from "./styles/StyledLock";
import { DiceValue } from "../../types/DiceValue";
import { GamePhase, ResourceType } from "../../constants/enumerations";

export interface ResourceDiceProps {
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
  const diceFace = (props.rolling && !props.isLocked) || props.value === null
    ? blank_face
    : faceValues[props.value]

  // Dice face should pulse if it can be traded
  const pulse = props.currentGamePhase == GamePhase.Building
    && props.value == ResourceType.Gold
    && props.isTradeable

  // Dice face should wobble when rolling and unlocked
  const wobble = props.rolling && !props.isLocked

  // Cursor should be pointer if it meets conditions to handleClick
  const pointer = (props.currentGamePhase == GamePhase.Rolling && props.value !== null)
    || pulse

  const tooltip = props.currentGamePhase == GamePhase.Rolling && props.value !== null && !props.isLocked
    ? "Lock dice"
    : props.currentGamePhase == GamePhase.Rolling && props.value !== null && props.isLocked
      ? "Unlock dice"
      : pulse
        ? "Trade gold"
        : ""

  function handleClick() {
    if (props.currentGamePhase == GamePhase.Rolling
      && props.value !== null) {
      props.onToggleDiceLocked(props.id)
    }

    if (pulse) {
      alert("This would open the popup to trade gold!")
    }
  }

  return (
    <StyledResourceDice title={tooltip} onClick={handleClick} $pointer={pointer}>
      <StyledResourceDiceFace
        width={`${diceWidth}%`}
        src={diceFace}
        $grayscale={props.isSpent}
        $pulse={pulse}
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
