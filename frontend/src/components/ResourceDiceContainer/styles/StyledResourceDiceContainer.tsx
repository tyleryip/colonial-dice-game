import { styled } from "styled-components"

const StyledResourceDiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
        width: 30%;
    }

    @media ${(props) => props.theme.breakpoints.xxl} {
        width: 25%;
    }
`

export default StyledResourceDiceContainer