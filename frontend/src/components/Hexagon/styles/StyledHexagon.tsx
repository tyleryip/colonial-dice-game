import { styled } from "styled-components";

interface StyledHexagonProps {
    $top: string,
    $left: string
}

const StyledHexagon = styled.div<StyledHexagonProps>`
    position: absolute;
    top: ${props => props.$top};
    left: ${props => props.$left};
    width: 25%;
`

export default StyledHexagon