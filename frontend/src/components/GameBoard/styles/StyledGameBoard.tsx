import { styled } from "styled-components";

const StyledGameBoard = styled.div`
    position: relative;
    aspect-ratio: 1/1;
    margin-right: auto;
    width: 100%;

    @media ${(props) => props.theme.breakpoints.xs} {
        width: 80%;
        margin-left: auto;
    }

    @media ${(props) => props.theme.breakpoints.s} {
        width: 55%;
    }

    @media ${(props) => props.theme.breakpoints.m} {
        width: 45%;
    }

    @media ${(props) => props.theme.breakpoints.l} {
        width: 40%;
    }

    @media ${(props) => props.theme.breakpoints.xl} {
        width: 40%;
        margin-right: 0%;
    }

    @media ${(props) => props.theme.breakpoints.xxl} {
        width: 35%;
    }
`

export default StyledGameBoard