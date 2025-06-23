import { styled } from "styled-components"

interface StyledResourceCostIconProps {
    $width: number
    $allowVertical?: boolean
    $verticalWidth?: number
}

const StyledResourceCostIcon = styled.img<StyledResourceCostIconProps>`
/** Layout */ 

/** Box Model */ 
    width: ${props => `${props.$width}%`};
    padding-left: 1%;
    padding-right: 1%;

/** Colour + Background */ 

/** Typography */ 

/** Visual Effects */ 

/** Responsive Design */ 
    @media ${(props) => props.theme.breakpoints.xs} {
        width: ${props => props.$allowVertical && `${props.$verticalWidth}%`};
    }

    @media ${(props) => props.theme.breakpoints.s} {
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

`

export default StyledResourceCostIcon