import { styled } from "styled-components"

const StyledScoreboard = styled.div`
/** Layout */ 
    display: flex;
    flex-direction: row;
    justify-items: stretch;
    justify-self: center;
    align-self: center;

/** Box Model */ 
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    border-style: solid;
    border-width: 1px;

/** Colour + Background */ 
    background-color: #FFFFFF;
    border-color: #000000;

/** Typography */ 

/** Visual Effects */ 

/** Responsive Design */ 
    @media ${(props) => props.theme.breakpoints.xs} {
        width: 90%;
        margin-bottom: 2%;
    }

    @media ${(props) => props.theme.breakpoints.s} {
        width: 75%;
    }

    @media ${(props) => props.theme.breakpoints.m} {

    }

    @media ${(props) => props.theme.breakpoints.l} {
        margin-top: 1%;
    }

    @media ${(props) => props.theme.breakpoints.xl} {
        width: 70%;
        margin-bottom: 1%;
    }

    @media ${(props) => props.theme.breakpoints.xxl} {
        width: 60%;
    }

/** Interactivity */ 

/** Micellaneous */

`

export default StyledScoreboard