import { styled } from "styled-components"

const StyledTotalScore = styled.div`
    width: 100%;
    display: flex;
    justify-self: stretch;
    align-self: stretch;
    padding-left: 1.5%;

    @media ${(props) => props.theme.breakpoints.xs} {
        grid-column: span 3;
    }

    @media ${(props) => props.theme.breakpoints.s} {

    }

    @media ${(props) => props.theme.breakpoints.m} {

    }

    @media ${(props) => props.theme.breakpoints.l} {
        grid-column: span 2;
    }

    @media ${(props) => props.theme.breakpoints.xl} {

    }

    @media ${(props) => props.theme.breakpoints.xxl} {

    }
`

export default StyledTotalScore