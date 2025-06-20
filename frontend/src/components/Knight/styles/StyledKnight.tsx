import { css, styled } from "styled-components"
import pulse from "../../../animations/pulse"
import colourFlash from "../../../animations/colourFlash"

interface StyledKnightProps {
    $pointer: boolean,
    $canBuild: boolean
}

const StyledKnight = styled.div<StyledKnightProps>`
    position: absolute;
    top: 14%;
    left: 44%;
    width: 12%;
    z-index: 1;

    &:hover {
        cursor: ${props => props.$pointer && css`pointer`};
    }

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
`

export default StyledKnight