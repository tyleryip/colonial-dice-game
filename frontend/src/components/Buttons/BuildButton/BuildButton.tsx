import StyledBuildButton from "./styles/StyledBuildButton"
import StyledBuildButtonIcon from "./styles/StyledBuildButtonIcon"
import { incrementTurn, selectIsGamePhaseBuilding, selectIsGamePhaseRolling, setGamePhase } from "../../../store/slices/gameSlice"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"

// Icons
import build_icon from "../../../assets/buttons/build-icon.svg"
import dice_icon from "../../../assets/buttons/dice-icon.svg"
import { GamePhase } from "../../../constants/enumerations"
import { addScore } from "../../../store/slices/scoreSlice"
import { resetDice, resetDiceLocks, setRollCount } from "../../../store/slices/diceSlice"

interface BuildButtonProps {
    disabled?: boolean
}

const BuildButton = (props: BuildButtonProps) => {
    // Props and constants

    const disabled = props.disabled ?? false

    // Dispatch

    const dispatch = useAppDispatch();

    // Selectors

    const gamePhaseRolling = useAppSelector((state) => selectIsGamePhaseRolling(state))
    const gamePhaseBuilding = useAppSelector((state) => selectIsGamePhaseBuilding(state))

    // Conditional rendering

    const tooltip = gamePhaseRolling
        ? "End rolling and build"
        : "End building and roll"

    const icon = gamePhaseRolling
        ? build_icon
        : dice_icon

    // Event handlers

    const handleClick = () => {
        if (gamePhaseRolling) {
            dispatch(setGamePhase(GamePhase.Building))
            dispatch(resetDiceLocks())
            dispatch(setRollCount(3))
        }

        if (gamePhaseBuilding) {
            dispatch(setGamePhase(GamePhase.Rolling))
            dispatch(addScore())
            dispatch(incrementTurn())
            dispatch(resetDice())
        }
    }

    return (
        <StyledBuildButton
            title={tooltip}
            disabled={disabled}
            onClick={handleClick}>
            <StyledBuildButtonIcon
                $disabled={disabled}
                src={icon} />
        </StyledBuildButton>
    )
}

export default BuildButton
