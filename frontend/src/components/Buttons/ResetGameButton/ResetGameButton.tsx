import { useAppDispatch } from "../../../store/hooks";
import { resetDice } from "../../../store/slices/diceSlice/diceSlice";
import { resetGame } from "../../../store/slices/gameSlice/gameSlice";
import { resetKnights } from "../../../store/slices/knightSlice/knightSlice";
import { resetResourceJokers } from "../../../store/slices/resourceJokerSlice/resourceJokerSlice";
import { resetScore } from "../../../store/slices/scoreSlice/scoreSlice";
import { resetStructures } from "../../../store/slices/structureSlice/structureSlice";
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
    dispatch(resetGame());
    dispatch(resetKnights());
    dispatch(resetResourceJokers());
    dispatch(resetStructures());
    dispatch(resetScore());
    dispatch(resetDice());

    props.onReset();
  }

  return (
    <StyledResetGameButton title={tooltip} onClick={handleClick}>
      Reset Game
    </StyledResetGameButton>
  );
};

export default ResetGameButton;
