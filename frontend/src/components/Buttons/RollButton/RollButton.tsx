import StyledRollButton from "./styles/StyledRollButton";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  selectIsGamePhaseBuilding,
  setGamePhase,
} from "../../../store/slices/gameSlice/gameSlice";
import { GamePhase } from "../../../constants/enumerations";
import { resetDiceLocks, rollDice } from "../../../store/slices/diceSlice/diceSlice";
import useSound from "use-sound";
import diceRollSound from '/audio/dice_roll.wav'
import { selectEffectiveVolume } from "../../../store/slices/settingsSlice/settingsSlice";
import dice_icon from '/assets/buttons/dice-icon.png'
import StyledRollButtonIcon from "./styles/StyledRollButtonIcon";

interface RollButtonProps {
  disabled?: boolean;
  rollCount: number;
  rollDurationMilliseconds: number;
  setRolling: (rolling: boolean) => void;
}

const RollButton = (props: RollButtonProps) => {
  // Props and constants

  const disabled = props.disabled;
  const rollCount = props.rollCount;
  const setRolling = props.setRolling;
  const rollDurationMilliseconds = props.rollDurationMilliseconds;
  const volume = useAppSelector(state => selectEffectiveVolume(state))

  // Dispatch

  const dispatch = useAppDispatch();

  // Selectors
  const gamePhaseBuilding = useAppSelector((state) =>
    selectIsGamePhaseBuilding(state)
  );

  // Conditional rendering

  const tooltip =
    rollCount === 2 ? "1 roll left" : `${3 - rollCount} rolls left`;

  const opacity = (key: number) => (rollCount > key ? 30 : 100);

  // Sound effects

  const [playDiceRollSound] = useSound(diceRollSound, {
    volume: volume,
    interrupt: true
  })

  // Event handlers

  function handleClick() {
    if (gamePhaseBuilding) {
      dispatch(setGamePhase(GamePhase.Rolling));
    }

    setTimeout(() => {
      // Cannot extract and move to roll button because we need to setRolling for the animation
      setRolling(false);

      // Need to set game phase to building only after the 3rd roll completes, so the rolling
      // animation doesn't play for locked dice
      if (rollCount == 2) {
        dispatch(setGamePhase(GamePhase.Building))
        dispatch(resetDiceLocks())
      }
    }, rollDurationMilliseconds);

    playDiceRollSound()
    setRolling(true);
    dispatch(rollDice());
  }

  return (
    <StyledRollButton title={tooltip} disabled={disabled} onClick={handleClick}>
      {Array.from({ length: 3 }, (_, key) => (
        <StyledRollButtonIcon src={dice_icon} key={key} $opacity={opacity(key)} />
      ))}
    </StyledRollButton>
  );
};

export default RollButton;
