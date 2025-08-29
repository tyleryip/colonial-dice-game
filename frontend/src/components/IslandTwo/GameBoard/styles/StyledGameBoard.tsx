import { styled } from "styled-components";

const StyledGameBoard = styled.div`
/** Layout */ 
    position: relative;
    aspect-ratio: 1/1;

/** Box Model */ 
    margin-right: auto;
    width: 100%;

/** Colour + Background */ 

/** Typography */ 

/** Visual Effects */ 

/** Responsive Design */ 
    @media ${(props) => props.theme.breakpoints.xs} {
        width: 80%;
        margin-left: auto;
    }

    @media ${(props) => props.theme.breakpoints.s} {
        width: 55%;
    }

    @media ${(props) => props.theme.breakpoints.m} {
        width: 45%;
    }

    @media ${(props) => props.theme.breakpoints.l} {
        width: 40%;
    }

    @media ${(props) => props.theme.breakpoints.xl} {
        width: 40%;
        margin-right: 0%;
    }

    @media ${(props) => props.theme.breakpoints.xxl} {
        width: 35%;
    }

/** Interactivity */ 

/** Micellaneous */
`

export default StyledGameBoard