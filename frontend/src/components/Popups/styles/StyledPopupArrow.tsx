import { styled } from "styled-components"

interface StyledPopupArrowProps {
    $top: number,
    $left: number
    $width: number,
}

const StyledPopupArrow = styled.img<StyledPopupArrowProps>`
/** Layout */ 
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: ${props => `${props.$width}%`};
    z-index: 3;

/** Box Model */ 

/** Colour + Background */ 

/** Typography */ 

/** Visual Effects */ 

/** Responsive Design */ 

/** Interactivity */ 

/** Micellaneous */
`

export default StyledPopupArrow