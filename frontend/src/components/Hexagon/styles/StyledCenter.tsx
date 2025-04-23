import { styled } from "styled-components"

interface StyledCenterProps {
    $top: number,
    $left: number
}

const StyledCenter = styled.div<StyledCenterProps>`
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: 30%;
    z-index: 1;
`

export default StyledCenter