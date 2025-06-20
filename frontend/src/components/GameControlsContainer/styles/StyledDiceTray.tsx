import { styled } from "styled-components"

const StyledDiceTray = styled.div`
    display: flex;
    flex-direction: row;
    justify-self: center;
    justify-content: center; 
    align-items: center;
    gap: 3%;
    margin-top: 2%;
    
    @media ${(props) => props.theme.breakpoints.xs} {
        width: 90%;
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
        width: 70%;
    }

    @media ${(props) => props.theme.breakpoints.xxl} {
        width: 60%;
    }
`

export default StyledDiceTray;