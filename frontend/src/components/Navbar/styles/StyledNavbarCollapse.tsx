import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import { styled } from 'styled-components'

const StyledNavbarCollapse = styled(NavbarCollapse)`
/** Layout */ 
    display: flex;
    justify-content: right;

/** Box Model */ 

/** Colour + Background */ 

/** Typography */ 

/** Visual Effects */ 

/** Responsive Design */ 
    @media ${(props) => props.theme.breakpoints.xs} {
        flex-direction: column;
    }

    @media ${(props) => props.theme.breakpoints.s} {
        flex-direction: row;
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

export default StyledNavbarCollapse