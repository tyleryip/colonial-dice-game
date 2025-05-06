import { css, styled } from "styled-components"

interface StyledScoreboardBoxProps {
    $pending?: boolean
}

const StyledScoreboardBox = styled.div<StyledScoreboardBoxProps>`
    width: 100%;
    background-color: #FFFFFF;
    border-style: solid;
    border-width: 1px;
    border-color: #000000;
    text-align: center;
    color: ${props => props.$pending ? css`#4b4b4b` : css`#000000`};
    font-weight: ${props => props.$pending ? css`normal` : css`bold`};
    padding-top: 1%;
    padding-bottom: 1%;
    grid-column: span 1;
`

export default StyledScoreboardBox;