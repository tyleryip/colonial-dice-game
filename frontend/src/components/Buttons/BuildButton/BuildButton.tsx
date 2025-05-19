import StyledBuildButton from "./styles/StyledBuildButton";
import {
  incrementTurn,
  selectIsGamePhaseBuilding,
  selectIsGamePhaseRolling,
  setGamePhase,
} from "../../../store/slices/gameSlice/gameSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { GamePhase } from "../../../constants/enumerations";
import { addScore } from "../../../store/slices/scoreSlice/scoreSlice";
import {
  resetDice,
  resetDiceLocks,
  setRollCount,
} from "../../../store/slices/diceSlice/diceSlice";
import BuildIcon from "../../Icons/Buttons/BuildIcon";
import DiceIcon from "../../Icons/Buttons/DiceIcon";

interface BuildButtonProps {
  disabled?: boolean;
}

const BuildButton = (props: BuildButtonProps) => {
  // Props and constants

  const disabled = props.disabled ?? false;

  // Dispatch

  const dispatch = useAppDispatch();

  // Selectors

  const gamePhaseRolling = useAppSelector((state) =>
    selectIsGamePhaseRolling(state)
  );
  const gamePhaseBuilding = useAppSelector((state) =>
    selectIsGamePhaseBuilding(state)
  );

  // Conditional rendering

  const tooltip = gamePhaseRolling
    ? "End rolling and build"
    : "End building and roll";

  const opacity = disabled ? 30 : 100;

  // Event handlers

  const handleClick = () => {
    if (gamePhaseRolling) {
      dispatch(setGamePhase(GamePhase.Building));
      dispatch(resetDiceLocks());
      dispatch(setRollCount(3));
    }

    if (gamePhaseBuilding) {
      dispatch(setGamePhase(GamePhase.Rolling));
      dispatch(addScore());
      dispatch(incrementTurn());
      dispatch(resetDice());
    }
  };

  return (
    <StyledBuildButton
      title={tooltip}
      disabled={disabled}
      onClick={handleClick}
    >
      {gamePhaseRolling && <BuildIcon width={37} opacity={opacity} />}
      {gamePhaseBuilding && <DiceIcon width={37} opacity={opacity} />}
    </StyledBuildButton>
  );
};

export default BuildButton;
