import { css, styled } from "styled-components"
import pulse from "../../../animations/pulse"

interface StyledKnightProps {
    $pointer: boolean,
    $pulse: boolean
}

const StyledKnight = styled.div<StyledKnightProps>`
    position: absolute;
    top: 14%;
    left: 44%;
    width: 12%;
    z-index: 1;
    -webkit-transform: translate3d(0,0,1px);

    &:hover {
        cursor: ${props => props.$pointer && css`pointer`};
    }

    animation: ${props =>
    (props.$pulse &&
        css`${pulse(1.08)} 1s infinite`
    )
    };
`

export default StyledKnight