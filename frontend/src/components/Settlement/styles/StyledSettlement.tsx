import { css, styled } from "styled-components"
import pulse from "../../../animations/pulse"

interface StyledSettlementProps {
    $top: number,
    $left: number,
    $width: number,
    $pointer: boolean,
    $pulse: boolean
}

const StyledSettlement = styled.div<StyledSettlementProps>`
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: ${props => `${props.$width}%`};
    z-index: 1;

    &:hover {
        cursor: ${props => props.$pointer && css`pointer`};
    }

    animation: ${props =>
    (props.$pulse &&
        css`${pulse} 1s infinite`
    )
    };
`

export default StyledSettlement