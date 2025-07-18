import { styled } from "styled-components"

const StyledScoreboard = styled.div`
/** Layout */ 
    display: grid;
    justify-items: stretch;

/** Box Model */ 
    margin-left: auto;
    margin-right: auto;
    padding: 1%;

/** Colour + Background */ 

/** Typography */ 

/** Visual Effects */ 

/** Responsive Design */ 
    @media ${(props) => props.theme.breakpoints.xs} {
        grid-template-columns: repeat(9, 1fr);
        grid-template-rows: repeat(2, 1fr);
        row-gap: 5%;
        width: 90%;
    }

    @media ${(props) => props.theme.breakpoints.s} {
        width: 75%;
    }

    @media ${(props) => props.theme.breakpoints.m} {

    }

    @media ${(props) => props.theme.breakpoints.l} {
        grid-template-columns: repeat(17, 1fr);
        grid-template-rows: 1fr;
    }

    @media ${(props) => props.theme.breakpoints.xl} {
        width: 70%;
        margin-bottom: 1%;
    }

    @media ${(props) => props.theme.breakpoints.xxl} {
        width: 60%;
        margin-bottom: 1%;
    }

/** Interactivity */ 

/** Micellaneous */
    
`

export default StyledScoreboard