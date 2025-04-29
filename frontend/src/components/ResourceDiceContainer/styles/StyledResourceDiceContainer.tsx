import { styled } from "styled-components"

const StyledResourceDiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2%;

    @media ${(props) => props.theme.breakpoints.xs} {
        width: 50%;
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