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

export interface ResourceDiceProps {
  id: number;
  value: number;
  rolling: boolean;
  rollDuration: number,
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

const ResourceDice = (props: ResourceDiceProps) => {
  const diceFace = props.rolling ? blank_face : faceValues[props.value - 1]

  return (
    <StyledResourceDice onClick={() => props.onToggleDiceLocked(props.id)}>
      <StyledResourceDiceFace
        width={"100%"}
        src={diceFace}
        $rolling={props.rolling}
        $duration={props.rollDuration} />
      <StyledLock src={lock} $locked={props.locked} />
    </StyledResourceDice>
  );
};

export default ResourceDice;
