import { css, styled } from 'styled-components'

interface StyledLeaderboardTableDataProps {
    $rank?: boolean
}

const StyledLeaderboardTableData = styled.td<StyledLeaderboardTableDataProps>`
/** Layout */ 
    align-content: center;

/** Box Model */ 
    width: ${props => props.$rank && css`10%`};

/** Colour + Background */ 

/** Typography */ 
    text-align: ${props => props.$rank && css`center`};
    line-height: 2.5rem;

/** Visual Effects */ 

/** Responsive Design */ 

/** Interactivity */ 

/** Micellaneous */
`

export default StyledLeaderboardTableData;