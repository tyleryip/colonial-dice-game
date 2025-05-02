import { styled } from "styled-components"

const StyledTradingPopup = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    background-color: #FFFFFF;

    @media ${(props) => props.theme.breakpoints.xs} {
        padding-top: 3%;
        padding-bottom: 3%;
        flex-direction: column;
    }

    @media ${(props) => props.theme.breakpoints.s} {
        padding-top: 1%;
        padding-bottom: 1%;
        flex-direction: row;
    }

    @media ${(props) => props.theme.breakpoints.m} {

    }

    @media ${(props) => props.theme.breakpoints.l} {

    }

    @media ${(props) => props.theme.breakpoints.xl} {

    }

    @media ${(props) => props.theme.breakpoints.xxl} {

    }
`

export default StyledTradingPopup