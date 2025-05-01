import { css, styled } from "styled-components"

interface StyledRollButtonIconProps {
    $used: boolean
}

const StyledRollButtonIcon = styled.img<StyledRollButtonIconProps>`
    width: 24%;
    opacity: ${props => props.$used &&
        css`
        30%
    `};

    transition: opacity 250ms ease-out;
`

export default StyledRollButtonIcon