import { css, styled } from "styled-components"

interface StyledResourceDiceProps {
    $pointer: boolean
}

const StyledResourceDice = styled.div<StyledResourceDiceProps>`
    position: relative;
    width: 100%;
    
    &:hover {
        cursor: ${props => props.$pointer &&
        css`
            pointer
        `};
    }
`

export default StyledResourceDice