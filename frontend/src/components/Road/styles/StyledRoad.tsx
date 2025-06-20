import { css, styled } from "styled-components"
import pulse from "../../../animations/pulse"
import colourFlash from "../../../animations/colourFlash"

interface StyledRoadProps {
    $top: number,
    $left: number,
    $width: number,
    $pointer: boolean,
    $canBuild: boolean
}

const StyledRoad = styled.div<StyledRoadProps>`
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: ${props => `${props.$width}%`};
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

export default StyledRoad