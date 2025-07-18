import { styled } from "styled-components"

const StyledGameControlsContainer = styled.div`
/** Layout */ 
    display: flex;
    flex-direction: column;
    align-items: center;

/** Box Model */ 
    padding: 1%;

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

    }

    @media ${(props) => props.theme.breakpoints.xl} {
        width: 50%;
    }

    @media ${(props) => props.theme.breakpoints.xxl} {

    }

/** Interactivity */ 

/** Micellaneous */   
`

export default StyledGameControlsContainer