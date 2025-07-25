import { css, styled } from "styled-components"

interface StyledResourceDiceProps {
    $pointer: boolean
}

const StyledResourceDice = styled.div<StyledResourceDiceProps>`
/** Layout */ 
    position: relative;

/** Box Model */ 
    width: 100%;

/** Colour + Background */ 

/** Typography */ 

/** Visual Effects */ 

/** Responsive Design */ 

/** Interactivity */ 
    &:hover {
        cursor: ${props => props.$pointer &&
        css`
            pointer
        `};
    }

/** Micellaneous */
`

export default StyledResourceDice