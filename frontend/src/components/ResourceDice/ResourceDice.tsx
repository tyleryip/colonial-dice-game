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

export interface ResourceDiceProps {
  id: number;
  value: DiceValue;
  rolling: boolean;
  rollDurationMilliseconds: number,
  locked: boolean;
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

const diceWidth = 80;

const ResourceDice = (props: ResourceDiceProps) => {
  const diceFace = (props.rolling && !props.locked) || props.value === null
    ? blank_face
    : faceValues[props.value - 1]

  function handleClick() {
    if (props.value !== null) {
      props.onToggleDiceLocked(props.id)
    }
  }

  return (
    <StyledResourceDice onClick={handleClick}>
      <StyledResourceDiceFace
        width={`${diceWidth}%`}
        src={diceFace}
        $rolling={props.rolling && !props.locked}
        $rollDuration={props.rollDurationMilliseconds} />
      <StyledLock
        width={`${diceWidth * 0.25}%`}
        src={lock}
        $locked={props.locked} />
    </StyledResourceDice>
  );
};

export default ResourceDice;
