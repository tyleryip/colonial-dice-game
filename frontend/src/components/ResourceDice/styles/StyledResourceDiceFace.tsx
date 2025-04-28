import { styled, css } from "styled-components"
import wobble from "../../../animations/wobble"

interface StyledResourceDiceFaceProps {
    $rolling: boolean
    $duration: number
}

const StyledResourceDiceFace = styled.img<StyledResourceDiceFaceProps>`
    border-radius: 10%;
    animation: ${props =>
        props.$rolling &&
        css`
            ${wobble} ${props.$duration}s linear 
        `};
`

export default StyledResourceDiceFace