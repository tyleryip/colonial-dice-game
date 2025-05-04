import { styled } from "styled-components"

interface StyledKnightProps {
    $top: number,
    $left: number,
    $width: number
}

const StyledKnight = styled.div<StyledKnightProps>`
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: ${props => `${props.$width}%`};
    z-index: 1;

    &:hover {
        cursor: pointer;
    }
`

export default StyledKnight