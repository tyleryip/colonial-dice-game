import { css, styled } from 'styled-components'

interface StyledToggleProps {
    $disabled: boolean
}

const StyledToggle = styled.img<StyledToggleProps>`
/** Layout */ 
    justify-self: right;

/** Box Model */
    width: 100%;
    margin-top: 2%;
    margin-bottom: 2%;

/** Colour + Background */ 

/** Typography */ 

/** Visual Effects */ 
    filter: ${props => props.$disabled && css`grayscale(100%)`};

/** Responsive Design */ 

/** Interactivity */ 
    cursor: ${props => !props.$disabled && css`pointer`};

/** Micellaneous */

`

export default StyledToggle