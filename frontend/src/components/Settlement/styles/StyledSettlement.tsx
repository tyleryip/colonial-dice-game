import { css, styled } from "styled-components"
import pulse from "../../../animations/pulse"

interface StyledSettlementProps {
    $top: number,
    $left: number,
    $pointer: boolean,
    $pulse: boolean
}

const StyledSettlement = styled.div<StyledSettlementProps>`
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: 13%;
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

export default StyledSettlement