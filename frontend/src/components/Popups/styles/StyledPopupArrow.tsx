import { styled } from "styled-components"

interface StyledPopupArrowProps {
    $top: number,
    $left: number
}

const StyledPopupArrow = styled.img<StyledPopupArrowProps>`
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: 23%;
`

export default StyledPopupArrow