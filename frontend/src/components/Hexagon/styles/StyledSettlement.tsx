import { styled } from "styled-components"

interface StyledSettlementProps {
    $top: number,
    $left: number,
    $width: number
}

const StyledSettlement = styled.div<StyledSettlementProps>`
    position: absolute;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: ${props => `${props.$width}%`};
    z-index: 1;

    // TODO: move to the asset itself
    &:hover {
        cursor: pointer;
    }
`

export default StyledSettlement