import { styled } from "styled-components"

interface StyledSettlementProps {
    $top: number,
    $left: number
}

const StyledSettlement = styled.div<StyledSettlementProps>`
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: 17%;
    z-index: 1;

    // TODO: move to the asset itself
    &:hover {
        cursor: pointer;
    }
`

export default StyledSettlement