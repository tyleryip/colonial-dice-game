import { styled } from "styled-components"

const StyledResourceDiceContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5%;
    justify-content: center;

    @media ${(props) => props.theme.breakpoints.xs} {
        width: 80%;
    }

    @media ${(props) => props.theme.breakpoints.s} {
        width: 50%;
    }

    @media ${(props) => props.theme.breakpoints.m} {
        width: 40%;
    }

    @media ${(props) => props.theme.breakpoints.l} {
        width: 40%;
    }

    @media ${(props) => props.theme.breakpoints.xl} {
        width: 30%;
    }
`

export default StyledResourceDiceContainer