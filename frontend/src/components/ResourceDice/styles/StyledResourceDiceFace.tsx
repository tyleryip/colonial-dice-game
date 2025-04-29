import { styled, css } from "styled-components"
import wobble from "../../../animations/wobble"

interface StyledResourceDiceFaceProps {
    $rolling: boolean
    $rollDuration: number
}

const StyledResourceDiceFace = styled.img<StyledResourceDiceFaceProps>`
    border-radius: 10%;
    animation: ${props =>
        props.$rolling &&
        css`
            ${wobble} ${props.$rollDuration}ms linear 
        `};
`

export default StyledResourceDiceFace