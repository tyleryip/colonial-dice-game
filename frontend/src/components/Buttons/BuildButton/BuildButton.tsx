import StyledBuildButton from "./styles/StyledBuildButton"
import StyledBuildButtonIcon from "./styles/StyledBuildButtonIcon"

import build_icon from "../../../assets/buttons/build-icon.svg"

interface BuildButtonProps {
    disabled?: boolean
    handleClick: () => void
}

const BuildButton = (props: BuildButtonProps) => {
    const tooltip = "End rolling and build"

    return (
        <StyledBuildButton title={tooltip} disabled={props.disabled} onClick={props.handleClick}>
            <StyledBuildButtonIcon src={build_icon} />
        </StyledBuildButton>
    )
}

export default BuildButton
