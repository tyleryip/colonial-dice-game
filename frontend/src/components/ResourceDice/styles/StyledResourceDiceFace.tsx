import { styled, css } from "styled-components"
import wobble from "../../../animations/wobble"
import pulse from "../../../animations/pulse"

interface StyledResourceDiceFaceProps {
    $wobble: boolean
    $wobbleDurationMilliseconds: number
    $grayscale: boolean
    $pulse: boolean
}

const StyledResourceDiceFace = styled.img<StyledResourceDiceFaceProps>`
    width: 100%;
    border-radius: 10%;

    filter: ${props =>
        props.$grayscale &&
        css`
            grayscale(100%)
        `};
        
    opacity: ${props =>
        props.$grayscale &&
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
`

export default StyledResourceDiceFace