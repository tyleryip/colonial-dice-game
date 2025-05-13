import { styled } from "styled-components"

const StyledHowToPlayAsset = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2%;


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
`

export default StyledHowToPlayAsset