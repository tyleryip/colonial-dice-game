import { styled } from "styled-components"

interface StyledCityProps {
    $top: number,
    $left: number,
    $width: number
}

const StyledCity = styled.div<StyledCityProps>`
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: ${props => `${props.$width}%`};
    z-index: 1;

    &:hover {
        cursor: pointer;
    }
`

export default StyledCity