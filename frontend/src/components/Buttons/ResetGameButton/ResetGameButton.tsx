import { useAppDispatch } from "../../../store/hooks";
import { islandOneResetDice } from "../../../store/slices/session/islandOne/diceSlice/islandOneDiceSlice";
import { islandOneResetGame } from "../../../store/slices/session/islandOne/gameSlice/islandOneGameSlice";
import { islandOneResetKnights } from "../../../store/slices/session/islandOne/knightSlice/islandOneKnightSlice";
import { resetResourceJokers } from "../../../store/slices/session/islandOne/resourceJokerSlice/resourceJokerSlice";
import { resetScore } from "../../../store/slices/session/islandOne/scoreSlice/scoreSlice";
import { islandOneResetStructures } from "../../../store/slices/session/islandOne/structureSlice/islandOneStructureSlice";
import StyledResetGameButton from "./styles/StyledResetGameButton";

interface ResetGameButtonProps {
  onReset: () => void;
}

const ResetGameButton = (props: ResetGameButtonProps) => {
  // Dispatch

  const dispatch = useAppDispatch();

  // Conditional rendering

  const tooltip = "Reset game";

  // Event handlers

  function handleClick() {
    const resetConfirmed = confirm("Do you want to reset the game? All progress will be lost.")
    if (!resetConfirmed) {
      return
    }

    dispatch(islandOneResetGame());
    dispatch(islandOneResetKnights());
    dispatch(resetResourceJokers());
    dispatch(islandOneResetStructures());
    dispatch(resetScore());
    dispatch(islandOneResetDice());

    props.onReset();
  }

  return (
    <StyledResetGameButton title={tooltip} onClick={handleClick}>
      Reset Game
    </StyledResetGameButton>
  );
};

export default ResetGameButton;
