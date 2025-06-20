import { css, styled } from "styled-components"
import pulse from "../../../animations/pulse"
import colourFlash from "../../../animations/colourFlash"

interface StyledCityProps {
    $top: number,
    $left: number,
    $pointer: boolean,
    $canBuild: boolean
}

const StyledCity = styled.div<StyledCityProps>`
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: 15.5%;
    z-index: 1;

    &:hover {
        cursor: ${props => props.$pointer && css`pointer`};
    }

    filter: ${props =>
    (!props.$canBuild &&
        css`grayscale(100%)`
    )
    };

    animation: ${props =>
    (props.$canBuild &&
        css`${pulse(1.08)} 1s infinite, ${colourFlash} 1s infinite`
    )
    };
`

export default StyledCity