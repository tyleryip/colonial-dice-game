import { styled } from "styled-components"

const StyledTradingIcon = styled.img`
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }

    @media ${(props) => props.theme.breakpoints.xs} {
        width: 90%
    }

    @media ${(props) => props.theme.breakpoints.s} {
        width: 20%
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

export default StyledTradingIcon