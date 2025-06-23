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
/** Layout */ 
    display: flex;
    position: absolute;
    justify-content: space-around;
    top: ${props => `${props.$top}%`};
    left: ${props => `${props.$left}%`};
    width: ${props => `${props.$width}%`};
    z-index: 3;

/** Box Model */ 
    border-radius: 5px;

/** Colour + Background */ 
    background-color: #FFFFFF;

/** Typography */ 

/** Visual Effects */ 

/** Responsive Design */ 
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

/** Interactivity */ 

/** Micellaneous */
    overflow: hidden;

`

export default StyledResourceCostPopup