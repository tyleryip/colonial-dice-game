import { styled } from "styled-components"

const StyledGameControlsContainer = styled.div`
    padding: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
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
`

export default StyledGameControlsContainer