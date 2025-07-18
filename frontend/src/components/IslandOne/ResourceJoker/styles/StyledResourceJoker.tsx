import { css, styled } from "styled-components"
import pulse from "../../../../animations/pulse"

interface StyledResourceJokerProps {
    $pointer: boolean,
    $pulse: boolean,
    $pulseDurationSeconds: number
    $pending: boolean
}

const StyledResourceJoker = styled.div<StyledResourceJokerProps>`
/** Layout */ 
    position: absolute;
    top: 36%;
    left: 37%;
    width: 25%;
    z-index: 2;

/** Box Model */ 

/** Colour + Background */ 

/** Typography */ 

/** Visual Effects */ 
    animation: ${props =>
    (props.$pulse &&
        css`${pulse(1.08)} ${props.$pulseDurationSeconds}s infinite`
    )
    };

    filter: ${props => (props.$pending && css`grayscale(80%)`)};

/** Responsive Design */ 

/** Interactivity */ 
    &:hover {
        cursor: ${props => props.$pointer && css`pointer`};
    }

/** Micellaneous */


`

export default StyledResourceJoker