import { styled } from "styled-components"
import StyledBasePopup from "../../styles/StyledBasePopup"

const StyledTradingPopup = styled(StyledBasePopup)`
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media ${(props) => props.theme.breakpoints.xs} {
        flex-direction: column;
    }

    @media ${(props) => props.theme.breakpoints.s} {
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