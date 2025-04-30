import { styled } from "styled-components"

const StyledScoreboard = styled.div`
    margin-top: 1%;
    display: grid;
    justify-items: stretch;
    align-items: stretch;
    
    @media ${(props) => props.theme.breakpoints.xs} {
        grid-template-columns: repeat(9, 1fr);
        grid-template-rows: repeat(2, 1fr);
        row-gap: 5%;
        width: 90%;
    }

    @media ${(props) => props.theme.breakpoints.s} {
        width: 75%;
    }

    @media ${(props) => props.theme.breakpoints.m} {
        grid-template-columns: repeat(18, 1fr);
        grid-template-rows: 1fr;

    }

    @media ${(props) => props.theme.breakpoints.l} {

    }

    @media ${(props) => props.theme.breakpoints.xl} {
        width: 70%;
    }

    @media ${(props) => props.theme.breakpoints.xxl} {
        width: 60%;
    }
`

export default StyledScoreboard