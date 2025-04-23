import { styled } from "styled-components";

const StyledGameBoard = styled.div`
    position: relative;
    aspect-ratio: 1/1;
    margin-right: auto;
    margin-left: auto;

    @media ${(props) => props.theme.breakpoints.xs} {
        width: 80%;
    }

    @media ${(props) => props.theme.breakpoints.s} {
        width: 70%;
    }

    @media ${(props) => props.theme.breakpoints.m} {
        width: 60%;
    }

    @media ${(props) => props.theme.breakpoints.l} {
        width: 50%;
    }

    @media ${(props) => props.theme.breakpoints.xl} {
        width: 40%;
    }
`

export default StyledGameBoard