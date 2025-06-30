import NavbarText from 'react-bootstrap/NavbarText'
import { styled } from 'styled-components'

const StyledNavbarText = styled(NavbarText)`
/** Layout */ 

/** Box Model */ 

/** Colour + Background */ 

/** Typography */ 
    white-space: nowrap;

/** Visual Effects */ 

/** Responsive Design */ 
    @media ${(props) => props.theme.breakpoints.xs} {
        margin-left: 0%;
    }

    @media ${(props) => props.theme.breakpoints.s} {
        margin-left: 5%;
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
    user-select: none;

/** Micellaneous */


`

export default StyledNavbarText