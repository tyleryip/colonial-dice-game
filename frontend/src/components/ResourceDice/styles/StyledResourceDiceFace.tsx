import { styled, css } from "styled-components"
import wobble from "../../../animations/wobble"
import pulse from "../../../animations/pulse"

interface StyledResourceDiceFaceProps {
    $wobble: boolean
    $wobbleDurationMilliseconds: number
    $isSpent: boolean
    $pulse: boolean
}

const StyledResourceDiceFace = styled.img<StyledResourceDiceFaceProps>`
/** Layout */ 

/** Box Model */ 
    width: 100%;
    border-radius: 10%;

/** Colour + Background */ 

/** Typography */ 

/** Visual Effects */ 
    filter: ${props =>
        props.$isSpent &&
        css`
            grayscale(100%)
        `};
        
    opacity: ${props =>
        props.$isSpent &&
        css`
            30%
        `
    };

    animation: ${props =>
        (props.$wobble &&
            css`
            ${wobble} ${props.$wobbleDurationMilliseconds}ms linear 
        `)
        || (props.$pulse &&
            css`${pulse(1.05)} 1s infinite`
        )
    };

    transition: opacity 250ms ease-out, filter 250ms ease-out;

/** Responsive Design */ 

/** Interactivity */ 

/** Micellaneous */

`

export default StyledResourceDiceFace