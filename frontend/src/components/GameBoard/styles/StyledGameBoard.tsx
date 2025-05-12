import { styled } from "styled-components";

const StyledGameBoard = styled.div`
    position: relative;
    aspect-ratio: 1/1;
    margin-right: auto;
    margin-left: auto;
    margin-top: 1%;
    margin-bottom: 1%;

    @media ${(props) => props.theme.breakpoints.xs} {
        width: 100%;
    }

    @media ${(props) => props.theme.breakpoints.s} {
        width: 65%;
    }

    @media ${(props) => props.theme.breakpoints.m} {
        width: 55%;
    }

    @media ${(props) => props.theme.breakpoints.l} {
        width: 50%;
    }

    @media ${(props) => props.theme.breakpoints.xl} {
        width: 40%;
    }

    @media ${(props) => props.theme.breakpoints.xxl} {
        width: 35%;
    }
`

export default StyledGameBoard