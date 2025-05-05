import StyledBuildButton from "./styles/StyledBuildButton"
import StyledBuildButtonIcon from "./styles/StyledBuildButtonIcon"
import { selectIsGamePhaseRolling } from "../../../store/slices/gameSlice"
import { useAppSelector } from "../../../store/hooks"

// Icons
import build_icon from "../../../assets/buttons/build-icon.svg"
import dice_icon from "../../../assets/buttons/dice-icon.svg"

interface BuildButtonProps {
    disabled?: boolean
    handleClick: () => void
}

const BuildButton = (props: BuildButtonProps) => {
    const gamePhaseRolling = useAppSelector((state) => selectIsGamePhaseRolling(state))

    const tooltip = gamePhaseRolling
        ? "End rolling and build"
        : "End building and roll"

    const icon = gamePhaseRolling
        ? build_icon
        : dice_icon

    return (
        <StyledBuildButton title={tooltip} disabled={props.disabled} onClick={props.handleClick}>
            <StyledBuildButtonIcon $disabled={props.disabled ?? false} src={icon} />
        </StyledBuildButton>
    )
}

export default BuildButton
