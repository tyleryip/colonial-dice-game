import StyledResourceDice from "./styles/StyledResourceDice";
import { Dice, TDiceRef} from "../../react-dice-roll/src/index";

// Dice faces
import ore_face from "../../assets/dice/ore-face.svg";
import wheat_face from "../../assets/dice/wheat-face.svg";
import wool_face from "../../assets/dice/wool-face.svg";
import wood_face from "../../assets/dice/wood-face.svg";
import brick_face from "../../assets/dice/brick-face.svg";
import gold_face from "../../assets/dice/gold-face.svg";
import { useRef } from "react";

export interface ResourceDiceProps {
  id: 1 | 2 | 3 | 4 | 5 | 6;
  locked: boolean;
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
  return (
    <StyledResourceDice>
      <Dice defaultValue={props.id} size={40} faces={faceValues} />
    </StyledResourceDice>
  );
};

export default ResourceDice;
