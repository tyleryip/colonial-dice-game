import { styled } from "styled-components"

interface StyledPopupArrowProps {
    $top: number,
    $left: number
    $width: number,
}

const StyledPopupArrow = styled.img<StyledPopupArrowProps>`
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: ${props => `${props.$width}%`};
    z-index: 3;
    -webkit-transform: translate3d(0,0,3px);
`

export default StyledPopupArrow