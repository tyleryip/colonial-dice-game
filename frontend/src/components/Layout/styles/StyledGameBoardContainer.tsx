import { styled } from 'styled-components'

/**
 * Contains the GameBoard and ResourceDiceContainer
 */
const StyledGameBoardContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${(props) => props.theme.breakpoints.xs} {
        flex-direction: column;
    }

    @media ${(props) => props.theme.breakpoints.s} {

    }

    @media ${(props) => props.theme.breakpoints.m} {
    
    }

    @media ${(props) => props.theme.breakpoints.l} {
      
    }

    @media ${(props) => props.theme.breakpoints.xl} {
        flex-direction: row;
        margin-top: auto;
        margin-bottom: auto;
        padding: 1%;
    }

    @media ${(props) => props.theme.breakpoints.xxl} {
      
    }
`

export default StyledGameBoardContainer