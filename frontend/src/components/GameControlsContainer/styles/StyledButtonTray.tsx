import { styled } from "styled-components"

const StyledButtonTray = styled.div`
    display: flex;
    justify-self: center;
    flex-direction: row;
    gap: 10%;
    justify-content: center; 
    margin-top: 2%;

    @media ${(props) => props.theme.breakpoints.xs} {
        width: 70%;
    }

    @media ${(props) => props.theme.breakpoints.s} {
        width: 60%;
    }

    @media ${(props) => props.theme.breakpoints.m} {
        width: 40%;
    }

    @media ${(props) => props.theme.breakpoints.l} {
        width: 30%;
    }

    @media ${(props) => props.theme.breakpoints.xl} {
        width: 60%;
    }

    @media ${(props) => props.theme.breakpoints.xxl} {
        width: 60%;
    }
`

export default StyledButtonTray