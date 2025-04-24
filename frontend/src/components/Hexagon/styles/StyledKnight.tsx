import { styled } from "styled-components"

interface StyledKnightProps {
    $top: number,
    $left: number
}

const StyledKnight = styled.div<StyledKnightProps>`
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: 15%;
    z-index: 1;
`

export default StyledKnight