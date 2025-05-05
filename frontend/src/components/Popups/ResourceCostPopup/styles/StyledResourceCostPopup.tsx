import { css, styled } from "styled-components"

interface StyledResourceCostPopupProps {
    $top: number,
    $left: number,
    $width: number,
    $allowVertical?: boolean
    $verticalTop?: number
    $verticalLeft?: number
    $verticalWidth?: number
}

const StyledResourceCostPopup = styled.div<StyledResourceCostPopupProps>`
    background-color: #FFFFFF;
    border-radius: 5px;
    overflow: hidden;
    z-index: 3;

    position: absolute;
    display: flex;
    justify-content: space-around;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: ${props => `${props.$width}%`};

    @media ${(props) => props.theme.breakpoints.xs} {
        flex-direction: ${props => props.$allowVertical
        && css`column`};
        top: ${props => `${props.$verticalTop}%`};
        left: ${props => `${props.$verticalLeft}%`};
        width: ${props => `${props.$verticalWidth}%`};
    }

    @media ${(props) => props.theme.breakpoints.s} {
        flex-direction: row;
        top: ${props => `${props.$top}%`};
        left: ${props => `${props.$left}%`};
        width: ${props => `${props.$width}%`};
    }

    @media ${(props) => props.theme.breakpoints.m} {
   
    }

    @media ${(props) => props.theme.breakpoints.l} {
     
    }

    @media ${(props) => props.theme.breakpoints.xl} {
    
    }

    @media ${(props) => props.theme.breakpoints.xxl} {
     
    }
`

export default StyledResourceCostPopup