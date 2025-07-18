import { css, styled } from "styled-components"

interface StyledScoreboardBoxProps {
    $pending?: boolean
}

const StyledScoreboardBox = styled.div<StyledScoreboardBoxProps>`
/** Layout */ 
    grid-column: span 1;

/** Box Model */ 
    width: 100%;
    border-style: solid;
    border-width: 1px;
    padding-top: 1%;
    padding-bottom: 1%;

/** Colour + Background */ 
    background-color: #FFFFFF;
    border-color: #000000;
    color: ${props => props.$pending ? css`#4b4b4b` : css`#000000`};

/** Typography */ 
    text-align: center;
    font-weight: ${props => props.$pending ? css`normal` : css`bold`};

/** Visual Effects */ 

/** Responsive Design */ 

/** Interactivity */ 

/** Micellaneous */
`

export default StyledScoreboardBox;