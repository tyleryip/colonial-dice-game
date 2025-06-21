import { styled } from 'styled-components'

const StyledInstructions = styled.div`
    min-height: 3rem;
    margin-top: 2%;
    
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: white;

    user-select: none;

    @media ${(props) => props.theme.breakpoints.xs} {
        width: 90%;
    }

    @media ${(props) => props.theme.breakpoints.s} {

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

export default StyledInstructions;