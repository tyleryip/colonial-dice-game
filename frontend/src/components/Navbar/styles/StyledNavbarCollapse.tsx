import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import { styled } from 'styled-components'

const StyledNavbarCollapse = styled(NavbarCollapse)`
    display: flex;
    justify-content: right;

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
`

export default StyledNavbarCollapse