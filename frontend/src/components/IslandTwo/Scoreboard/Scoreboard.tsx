import CurrentTurnBox from './CurrentTurnContainer/CurrentTurnContainer'
import ScoreContainer from './ScoreContainer/ScoreContainer'
import StyledScoreboard from './styles/StyledScoreboard'
import ToggleContainer from './ToggleContainer/ToggleContainer'

const Scoreboard = () => {
    return (
        <StyledScoreboard>
            <CurrentTurnBox />
            <ScoreContainer />
            <ToggleContainer />
        </StyledScoreboard>
    )
}

export default Scoreboard
