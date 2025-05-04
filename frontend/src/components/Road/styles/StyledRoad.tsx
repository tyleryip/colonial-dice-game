import { styled } from "styled-components"

interface StyledRoadProps {
    $top: number,
    $left: number,
    $width: number
}

const StyledRoad = styled.div<StyledRoadProps>`
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: ${props => `${props.$width}%`};
    z-index: 1;

    &:hover {
        cursor: pointer;
    }
`

export default StyledRoad