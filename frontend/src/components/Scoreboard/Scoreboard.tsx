import StyledScoreboard from './styles/StyledScoreboard'
import StyledScoreboardBox from './styles/StyledScoreboardBox'
import StyledTurnScoreBar from './styles/StyledTurnScoreBar'

const Scoreboard = () => {
    return (
        <StyledScoreboard>
            <StyledTurnScoreBar>
                {Array.from({ length: 15 }, (_, key) => (
                    <StyledScoreboardBox key={key}>{key + 1}</StyledScoreboardBox>
                ))}
            </StyledTurnScoreBar>
            <StyledScoreboardBox>{0}</StyledScoreboardBox>
        </StyledScoreboard>
    )
}

export default Scoreboard
