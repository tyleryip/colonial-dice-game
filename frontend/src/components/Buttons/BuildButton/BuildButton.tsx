import StyledBuildButton from "./styles/StyledBuildButton"
import StyledBuildButtonIcon from "./styles/StyledBuildButtonIcon"

import build_icon from "../../../assets/buttons/build-icon.svg"
import dice_icon from "../../../assets/buttons/dice-icon.svg"
import { GamePhase } from "../../../constants/enumerations"

interface BuildButtonProps {
    disabled?: boolean
    currentGamePhase: GamePhase
    handleClick: () => void
}

const BuildButton = (props: BuildButtonProps) => {

    const tooltip = props.currentGamePhase == GamePhase.Rolling
        ? "End rolling and build"
        : "End building and roll"

    const icon = props.currentGamePhase == GamePhase.Rolling
        ? build_icon
        : dice_icon

    return (
        <StyledBuildButton title={tooltip} disabled={props.disabled} onClick={props.handleClick}>
            <StyledBuildButtonIcon $disabled={props.disabled ?? false} src={icon} />
        </StyledBuildButton>
    )
}

export default BuildButton
