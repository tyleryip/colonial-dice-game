import StyledBuildButton from "./styles/StyledBuildButton"

interface BuildButtonProps {
    disabled?: boolean
    handleClick: () => void
}

const BuildButton = (props: BuildButtonProps) => {
    const tooltip = "End rolling and build"

    return (
        <StyledBuildButton title={tooltip} disabled={props.disabled} onClick={props.handleClick}>
            {"Build"}
        </StyledBuildButton>
    )
}

export default BuildButton
