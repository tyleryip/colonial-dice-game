import { styled } from "styled-components"

const StyledDiceTray = styled.div`
    display: flex;
    flex-direction: row;
    justify-self: center;
    justify-content: center; 
    align-items: center;
    gap: 3%;
    
        @media ${(props) => props.theme.breakpoints.xs} {
        width: 70%;
    }

    @media ${(props) => props.theme.breakpoints.s} {
        width: 60%;
    }

    @media ${(props) => props.theme.breakpoints.m} {
        width: 40%;
    }

    @media ${(props) => props.theme.breakpoints.l} {
        width: 30%;
    }

    @media ${(props) => props.theme.breakpoints.xl} {
        width: 30%;
    }

    @media ${(props) => props.theme.breakpoints.xxl} {
        width: 25%;
    }
`

export default StyledDiceTray;