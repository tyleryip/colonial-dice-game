import NavbarText from 'react-bootstrap/NavbarText'
import { styled } from 'styled-components'

const StyledNavbarText = styled(NavbarText)`
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
`

export default StyledNavbarText