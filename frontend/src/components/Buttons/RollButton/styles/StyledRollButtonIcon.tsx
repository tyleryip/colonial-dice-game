import { css, styled } from "styled-components"

interface StyledRollButtonIconProps {
    $used: boolean
}

const StyledRollButtonIcon = styled.img<StyledRollButtonIconProps>`
    width: 25%;
    opacity: ${props => props.$used &&
        css`
        50%
    `};
`

export default StyledRollButtonIcon