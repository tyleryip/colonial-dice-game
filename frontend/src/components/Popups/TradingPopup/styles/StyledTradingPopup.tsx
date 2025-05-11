import { styled } from "styled-components"

const StyledTradingPopup = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    overflow: hidden;
    z-index: 3;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 10%;
    padding-right: 10%;

    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media ${(props) => props.theme.breakpoints.xs} {
        top: -435%;
        left: -10%;
        width: 100%;
        flex-direction: column;
    }

    @media ${(props) => props.theme.breakpoints.s} {
        top: -100%;
        left: -160%;
        width: 400%;
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