import { css, styled } from "styled-components"

interface StyledRoadProps {
    $top: number,
    $left: number,
    $width: number,
    $pointer: boolean
}

const StyledRoad = styled.div<StyledRoadProps>`
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: ${props => `${props.$width}%`};
    z-index: 1;

    &:hover {
        cursor: ${props => props.$pointer && css`pointer`};
    }
`

export default StyledRoad