import { useAppDispatch } from "../../../store/hooks";
import { islandOneResetDice } from "../../../store/slices/session/islandOne/diceSlice/islandOneDiceSlice";
import { resetGame } from "../../../store/slices/session/islandOne/gameSlice/gameSlice";
import { resetKnights } from "../../../store/slices/session/islandOne/knightSlice/knightSlice";
import { resetResourceJokers } from "../../../store/slices/session/islandOne/resourceJokerSlice/resourceJokerSlice";
import { resetScore } from "../../../store/slices/session/islandOne/scoreSlice/scoreSlice";
import { resetStructures } from "../../../store/slices/session/islandOne/structureSlice/structureSlice";
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

    dispatch(resetGame());
    dispatch(resetKnights());
    dispatch(resetResourceJokers());
    dispatch(resetStructures());
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
