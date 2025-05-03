import { styled } from "styled-components"
import StyledBasePopup from "../../styles/StyledBasePopup"

const StyledTradingPopup = styled(StyledBasePopup)`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media ${(props) => props.theme.breakpoints.xs} {
        top: -435%;
        left: -10%;
        width: 100%;
        padding-top: 5%;
        padding-bottom: 5%;
        padding-left: 10%;
        padding-right: 10%;
        flex-direction: column;
    }

    @media ${(props) => props.theme.breakpoints.s} {
        top: -100%;
        left: -160%;
        width: 400%;
        padding-top: 5%;
        padding-bottom: 5%;
        padding-left: 10%;
        padding-right: 10%;
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