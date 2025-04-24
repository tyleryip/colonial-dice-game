import { styled } from "styled-components"

interface StyledJokerProps {
    $top: number,
    $left: number
}

const StyledResourceJoker = styled.div<StyledJokerProps>`
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: 30%;
    z-index: 2;
`

export default StyledResourceJoker