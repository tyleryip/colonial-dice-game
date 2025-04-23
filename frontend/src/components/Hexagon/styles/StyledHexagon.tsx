import { styled } from "styled-components";

interface StyledHexagonProps {
    $top: number,
    $left: number,
    $width: number
}

const StyledHexagon = styled.div<StyledHexagonProps>`
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: ${props => `${props.$width}%`};
`

export default StyledHexagon