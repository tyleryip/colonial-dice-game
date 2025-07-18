import StyledBuildButton from "./styles/StyledBuildButton";
import {
  incrementTurn,
  selectCurrentTurn,
  selectIsGamePhaseBuilding,
  selectIsGamePhaseRolling,
  setGamePhase,
} from "../../../../store/slices/session/islandOne/gameSlice/gameSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { GamePhase } from "../../../../constants/enumerations";
import { addScore } from "../../../../store/slices/session/islandOne/scoreSlice/scoreSlice";
import {
  islandOneResetDice,
  islandOneResetDiceLocks,
  islandOneSetRollCount,
} from "../../../../store/slices/session/islandOne/diceSlice/islandOneDiceSlice";
import gameOverSound from '/audio/game_over.wav'
import { selectEffectiveVolume } from "../../../../store/slices/local/settingsSlice/settingsSlice";
import useSound from "use-sound";
import { useEffect, useState } from "react";
import build_icon from '/assets/buttons/build-icon.png'
import dice_icon from '/assets/buttons/dice-icon.png'
import StyledBuildButtonIcon from "./styles/StyledBuildButtonIcon";

interface BuildButtonProps {
  disabled?: boolean;
}

const BuildButton = (props: BuildButtonProps) => {
  // Props and constants

  const [disabled, setDisabled] = useState(true)
  const disabledDelayMilliseconds = 2000

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

  /**
   * Disable the build button for a short time after any game phase
   * changes or prop changes to prevent the user from mis-clicking.
   */
  useEffect(() => {
    // By default, always disable after dependencies change
    setDisabled(true)

    setTimeout(() => {
      // After delay, evaluate and update disabled
      setDisabled(props.disabled ?? false)
    },
      disabledDelayMilliseconds)
  }, [props.disabled, gamePhaseBuilding])

  const tooltip = gamePhaseRolling
    ? "End rolling and build"
    : "End building and roll";

  const opacity = disabled ? 30 : 100;

  const getIcon = (): string => {
    return gamePhaseRolling
      ? build_icon
      : dice_icon
  }

  // Sound effects

  const [playGameOverSound] = useSound(gameOverSound, {
    volume: volume
  });

  // Event handlers

  const handleClick = () => {
    if (gamePhaseRolling) {
      dispatch(setGamePhase(GamePhase.Building));
      dispatch(islandOneResetDiceLocks());
      dispatch(islandOneSetRollCount(3));
    }

    if (gamePhaseBuilding) {
      dispatch(setGamePhase(GamePhase.Rolling));
      dispatch(addScore());
      dispatch(incrementTurn());
      dispatch(islandOneResetDice());

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
      <StyledBuildButtonIcon src={getIcon()} $width={37} $opacity={opacity} />
    </StyledBuildButton>
  );
};

export default BuildButton;
