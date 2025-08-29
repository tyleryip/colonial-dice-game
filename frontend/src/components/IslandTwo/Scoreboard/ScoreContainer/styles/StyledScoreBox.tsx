import { styled } from 'styled-components'

const StyledScoreBox = styled.img`
/** Layout */ 
    justify-self: center;
    align-self: center;

/** Box Model */ 

/** Colour + Background */ 

/** Typography */ 

/** Visual Effects */ 

/** Responsive Design */ 
    @media ${(props) => props.theme.breakpoints.xs} {
        width: 50%;
        margin-top: 1%;
        margin-bottom: 1%;
    } 
    @media ${(props) => props.theme.breakpoints.s} {
        width: 35%;
    }
    @media ${(props) => props.theme.breakpoints.m} {
        width: 25%;
    }
    @media ${(props) => props.theme.breakpoints.l} {
        width: 40%;
    }
    @media ${(props) => props.theme.breakpoints.xl} {

    }
    @media ${(props) => props.theme.breakpoints.xxl} {

    }
    
/** Interactivity */ 

/** Micellaneous */

`

export default StyledScoreBox