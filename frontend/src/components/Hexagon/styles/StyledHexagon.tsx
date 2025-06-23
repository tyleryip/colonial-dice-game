import { styled } from "styled-components";

interface StyledHexagonProps {
    $top: number,
    $left: number,
}

const StyledHexagon = styled.div<StyledHexagonProps>`
/** Layout */ 
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};

/** Box Model */ 
    width: 37.5%;

/** Colour + Background */ 

/** Typography */ 

/** Visual Effects */ 

/** Responsive Design */ 

/** Interactivity */ 

/** Micellaneous */
`

export default StyledHexagon