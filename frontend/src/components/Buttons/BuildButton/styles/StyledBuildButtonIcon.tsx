import { css, styled } from "styled-components"

interface StyledBuildButtonIconProps {
    $disabled: boolean
}

const StyledBuildButtonIcon = styled.img<StyledBuildButtonIconProps>`
    width: 32%;
    opacity: ${props => props.$disabled && css`70%`};

    transition: opacity 250ms ease-out;
    `

export default StyledBuildButtonIcon