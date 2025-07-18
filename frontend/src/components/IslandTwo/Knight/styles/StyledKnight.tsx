import { css, styled } from "styled-components"
import pulse from "../../../../animations/pulse"
import colourFlash from "../../../../animations/colourFlash"

interface StyledKnightProps {
    $pointer: boolean,
    $canBuild: boolean,
    $isLeft?: boolean,
    $isRight?: boolean
}

const StyledKnight = styled.div<StyledKnightProps>`
/** Layout */ 
    position: absolute;
    top: 14%;
    left: ${props => {
        if (props.$isLeft) {
            return '37%'
        }
        if (props.$isRight) {
            return '51%'
        }
        return '44%'
    }};
    width: 12%;
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

export default StyledKnight