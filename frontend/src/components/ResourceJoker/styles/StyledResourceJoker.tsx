import { css, styled } from "styled-components"
import pulse from "../../../animations/pulse"

interface StyledResourceJokerProps {
    $pointer: boolean,
    $pulse: boolean,
    $pulseDurationSeconds: number
    $pending: boolean
}

const StyledResourceJoker = styled.div<StyledResourceJokerProps>`
    position: absolute;
    top: 36%;
    left: 37%;
    width: 25%;
    z-index: 2;
    -webkit-transform: translate3d(0,0,2px);

    &:hover {
        cursor: ${props => props.$pointer && css`pointer`};
    }

    animation: ${props =>
    (props.$pulse &&
        css`${pulse(1.08)} ${props.$pulseDurationSeconds}s infinite`
    )
    };

    filter: ${props => (props.$pending && css`grayscale(80%)`)};
`

export default StyledResourceJoker