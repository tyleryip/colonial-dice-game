import StyledResourceDice from "./styles/StyledResourceDice";
import { useState } from "react";

// Dice faces
import ore_face from "../../assets/dice/ore-face.svg";
import wheat_face from "../../assets/dice/wheat-face.svg";
import wool_face from "../../assets/dice/wool-face.svg";
import wood_face from "../../assets/dice/wood-face.svg";
import brick_face from "../../assets/dice/brick-face.svg";
import gold_face from "../../assets/dice/gold-face.svg";
import Wobble from "../../animations/wobble";
import StyledResourceDiceFace from "./styles/StyledResourceDiceFace";

export interface ResourceDiceProps {
  id: number;
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
const values = [1, 2, 3, 4, 5, 6];

const ResourceDice = (props: ResourceDiceProps) => {
  const [value, setValue] = useState(values[props.id - 1]);
  const [rolling, setRolling] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      const newValue = Math.floor(Math.random() * 6 + 1);
      console.log(newValue);
      setValue(newValue);
      setRolling(false);
      console.log("Finished rolling!");
    }, 750);

    console.log("Rolling!");
    setRolling(true);
  };

  // TODO: clean up, and round corners on dice by using a styled img with border radius

  return (
    <StyledResourceDice onClick={handleClick}>
      {rolling && (
        <Wobble duration={0.75}>
          <StyledResourceDiceFace width={"100%"} src={faceValues[value - 1]} />
        </Wobble>
      )}
      {!rolling && (
        <StyledResourceDiceFace width={"100%"} src={faceValues[value - 1]} />
      )}
    </StyledResourceDice>
  );
};

export default ResourceDice;
