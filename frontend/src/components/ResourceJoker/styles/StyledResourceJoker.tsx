import { css, styled } from "styled-components"
import pulse from "../../../animations/pulse"

interface StyledResourceJokerProps {
    $pointer: boolean,
    $pulse: boolean
}

const StyledResourceJoker = styled.div<StyledResourceJokerProps>`
    position: absolute;
    top: 36%;
    left: 37%;
    width: 25%;
    z-index: 2;

    &:hover {
        cursor: pointer;
    }

    &:hover {
        cursor: ${props => props.$pointer && css`pointer`};
    }

    animation: ${props =>
    (props.$pulse &&
        css`${pulse(1.08)} 1s infinite`
    )
    };
`

export default StyledResourceJoker