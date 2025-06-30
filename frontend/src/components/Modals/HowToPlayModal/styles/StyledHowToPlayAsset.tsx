import { styled } from "styled-components"

const StyledHowToPlayAsset = styled.img`
/** Layout */ 
    display: block;

/** Box Model */ 
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2%;

/** Colour + Background */ 

/** Typography */ 

/** Visual Effects */ 

/** Responsive Design */ 
    @media ${(props) => props.theme.breakpoints.xs} {
        width: 100%;
    }

    @media ${(props) => props.theme.breakpoints.s} {

    }

    @media ${(props) => props.theme.breakpoints.m} {
        
    }

    @media ${(props) => props.theme.breakpoints.l} {
        width: 60%;
    }

    @media ${(props) => props.theme.breakpoints.xl} {

    }

    @media ${(props) => props.theme.breakpoints.xxl} {

    }

/** Interactivity */ 

/** Micellaneous */
`

export default StyledHowToPlayAsset