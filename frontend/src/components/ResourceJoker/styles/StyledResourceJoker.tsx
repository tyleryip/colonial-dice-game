import { styled } from "styled-components"

interface StyledResourceJokerProps {
    $top: number,
    $left: number,
    $width: number
}

const StyledResourceJoker = styled.div<StyledResourceJokerProps>`
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: ${props => `${props.$width}%`};
    z-index: 2;

    &:hover {
        cursor: pointer;
    }
`

export default StyledResourceJoker