import { styled, css } from "styled-components"
import wobble from "../../../animations/wobble"

interface StyledResourceDiceFaceProps {
    $rolling: boolean
    $rollDuration: number
    $spent: boolean
}

const StyledResourceDiceFace = styled.img<StyledResourceDiceFaceProps>`
    border-radius: 10%;
    filter: ${props =>
        props.$spent &&
        css`
            grayscale(100%)
        `};
    opacity: ${props =>
        props.$spent &&
        css`
            30%
        `
    };
    animation: ${props =>
        props.$rolling &&
        css`
            ${wobble} ${props.$rollDuration}ms linear 
        `};

    transition: opacity 250ms ease-out, filter 250ms ease-out;
`

export default StyledResourceDiceFace