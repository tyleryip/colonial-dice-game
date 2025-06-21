import { useAppDispatch } from "../../../store/hooks";
import { resetDice } from "../../../store/slices/diceSlice/diceSlice";
import { resetGame } from "../../../store/slices/gameSlice/gameSlice";
import { resetKnights } from "../../../store/slices/knightSlice/knightSlice";
import { resetResourceJokers } from "../../../store/slices/resourceJokerSlice/resourceJokerSlice";
import { resetScore } from "../../../store/slices/scoreSlice/scoreSlice";
import { resetStructures } from "../../../store/slices/structureSlice/structureSlice";
import StyledPlayAgainButton from "./styles/StyledPlayAgainButton";
import StyledPlayAgainIcon from "./styles/StyledPlayAgainIcon";
import play_again from '/assets/buttons/play-again.png'

const PlayAgainButton = () => {
  // Dispatch

  const dispatch = useAppDispatch();

  // Conditional rendering

  const tooltip = "Play again";

  // Event handlers

  function handleClick() {
    dispatch(resetGame());
    dispatch(resetKnights());
    dispatch(resetResourceJokers());
    dispatch(resetStructures());
    dispatch(resetScore());
    dispatch(resetDice());
  }

  return (
    <StyledPlayAgainButton title={tooltip} onClick={handleClick}>
      <StyledPlayAgainIcon src={play_again} />
    </StyledPlayAgainButton>
  );
};

export default PlayAgainButton;
