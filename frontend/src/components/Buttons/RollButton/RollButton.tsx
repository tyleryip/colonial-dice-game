import StyledRollButton from './styles/StyledRollButton'
import dice_icon from "/assets/buttons/dice-icon.svg"
import StyledRollButtonIcon from './styles/StyledRollButtonIcon'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { selectIsGamePhaseBuilding, setGamePhase } from '../../../store/slices/gameSlice'
import { GamePhase } from '../../../constants/enumerations'
import { rollDice } from '../../../store/slices/diceSlice'

interface RollButtonProps {
    disabled?: boolean
    rollCount: number
    rollDurationMilliseconds: number
    setRolling: (rolling: boolean) => void
}

const RollButton = (props: RollButtonProps) => {
    // Props and constants

    const disabled = props.disabled
    const rollCount = props.rollCount
    const setRolling = props.setRolling
    const rollDurationMilliseconds = props.rollDurationMilliseconds

    // Dispatch

    const dispatch = useAppDispatch();

    // Selectors
    const gamePhaseBuilding = useAppSelector(state => selectIsGamePhaseBuilding(state))

    // Conditional rendering

    const tooltip = rollCount === 2
        ? "1 roll left"
        : `${3 - rollCount} rolls left`

    // Event handlers

    function handleClick() {
        if (gamePhaseBuilding) {
            dispatch(setGamePhase(GamePhase.Rolling))
        }

        setTimeout(() => {
            dispatch(rollDice());
            // Cannot extract and move to roll button because we need to setRolling for the animation
            setRolling(false);

        }, rollDurationMilliseconds);

        setRolling(true);
    }

    return (
        <StyledRollButton
            title={tooltip}
            disabled={disabled}
            onClick={handleClick}>
            {Array.from({ length: 3 }, (_, key) => (
                <StyledRollButtonIcon
                    key={key}
                    src={dice_icon}
                    alt="Dice"
                    $used={rollCount > key} />
            ))}
        </StyledRollButton>
    )
}

export default RollButton
