import { css, styled } from "styled-components"
import pulse from "../../../../animations/pulse"
import colourFlash from "../../../../animations/colourFlash"

interface StyledRoadProps {
    $top: number,
    $left: number,
    $width: number,
    $pointer: boolean,
    $canBuild: boolean
}

const StyledRoad = styled.div<StyledRoadProps>`
/** Layout */ 
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: ${props => `${props.$width}%`};
    z-index: 1;

/** Box Model */ 

/** Colour + Background */ 

/** Typography */ 

/** Visual Effects */ 
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

/** Responsive Design */ 

/** Interactivity */ 
    &:hover {
        cursor: ${props => props.$pointer && css`pointer`};
    }

/** Micellaneous */
`

export default StyledRoad