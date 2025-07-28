import { styled } from 'styled-components'

const StyledScoreContainer = styled.div`
/** Layout */ 
    display: grid;
    width: 100%;

/** Box Model */ 
    padding-left: 1%;
    padding-right: 1%;

/** Colour + Background */ 

/** Typography */ 

/** Visual Effects */ 

/** Responsive Design */ 
    @media ${(props) => props.theme.breakpoints.xs} {
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    @media ${(props) => props.theme.breakpoints.s} {

    }

    @media ${(props) => props.theme.breakpoints.m} {

    }

    @media ${(props) => props.theme.breakpoints.l} {
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: 1fr;
    }

    @media ${(props) => props.theme.breakpoints.xl} {

    }

    @media ${(props) => props.theme.breakpoints.xxl} {

    }

/** Interactivity */ 

/** Micellaneous */

`

export default StyledScoreContainer