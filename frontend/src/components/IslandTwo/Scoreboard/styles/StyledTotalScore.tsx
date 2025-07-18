import { styled } from "styled-components"

const StyledTotalScore = styled.div`
/** Layout */ 
    display: flex;
    justify-self: stretch;
    align-self: stretch;

/** Box Model */ 
    width: 100%;
    padding-left: 1.5%;

/** Colour + Background */ 

/** Typography */ 

/** Visual Effects */ 

/** Responsive Design */ 
    @media ${(props) => props.theme.breakpoints.xs} {
        grid-column: span 3;
    }

    @media ${(props) => props.theme.breakpoints.s} {

    }

    @media ${(props) => props.theme.breakpoints.m} {

    }

    @media ${(props) => props.theme.breakpoints.l} {
        grid-column: span 2;
    }

    @media ${(props) => props.theme.breakpoints.xl} {

    }

    @media ${(props) => props.theme.breakpoints.xxl} {

    }

/** Interactivity */ 

/** Micellaneous */

`

export default StyledTotalScore