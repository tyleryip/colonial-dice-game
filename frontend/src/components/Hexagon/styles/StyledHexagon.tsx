import { styled } from "styled-components";

interface StyledHexagonProps {
    $top: number,
    $left: number,
}

const StyledHexagon = styled.div<StyledHexagonProps>`
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: 37.5%;
`

export default StyledHexagon