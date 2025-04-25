import { styled } from "styled-components"

interface StyledCityProps {
    $top: number,
    $left: number
}

const StyledCity = styled.div<StyledCityProps>`
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: 20%;
    z-index: 1;
`

export default StyledCity