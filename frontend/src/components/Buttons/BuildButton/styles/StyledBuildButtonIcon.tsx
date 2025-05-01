import { css, styled } from "styled-components"

interface StyledBuildButtonIconProps {
    $disabled: boolean
}

const StyledBuildButtonIcon = styled.img<StyledBuildButtonIconProps>`
    width: 37%;
    opacity: ${props => props.$disabled && css`30%`};

    transition: opacity 250ms ease-out;
    `

export default StyledBuildButtonIcon