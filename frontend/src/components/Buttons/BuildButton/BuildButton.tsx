import StyledBuildButton from "./styles/StyledBuildButton";
import {
  incrementTurn,
  selectCurrentTurn,
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
import gameOverSound from '/audio/game_over.wav'
import { selectEffectiveVolume } from "../../../store/slices/settingsSlice/settingsSlice";
import useSound from "use-sound";

interface BuildButtonProps {
  disabled?: boolean;
}

const BuildButton = (props: BuildButtonProps) => {
  // Props and constants

  const disabled = props.disabled ?? false;

  // Dispatch

  const dispatch = useAppDispatch();

  // Selectors

  const gamePhaseRolling = useAppSelector(state =>
    selectIsGamePhaseRolling(state)
  );
  const gamePhaseBuilding = useAppSelector(state =>
    selectIsGamePhaseBuilding(state)
  );
  const currentTurn = useAppSelector(state => selectCurrentTurn(state))
  const volume = useAppSelector(state => selectEffectiveVolume(state))

  // Conditional rendering

  const tooltip = gamePhaseRolling
    ? "End rolling and build"
    : "End building and roll";

  const opacity = disabled ? 30 : 100;

  // Sound effects

  const [playGameOverSound] = useSound(gameOverSound, {
    volume: volume
  });

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

      if (currentTurn >= 14) {
        playGameOverSound();
      }
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
