import { useAppSelector } from '../../store/hooks'
import { selectScoreValues, selectTotalScore } from '../../store/slices/scoreSlice'
import { ScoreValue } from '../../types/ScoreValue'
import StyledScoreboard from './styles/StyledScoreboard'
import StyledScoreboardBox from './styles/StyledScoreboardBox'
import StyledTurnScoreBar from './styles/StyledTurnScoreBar'

const Scoreboard = () => {
    const scores = useAppSelector(state => selectScoreValues(state))
    const totalScore = useAppSelector(state => selectTotalScore(state))

    return (
        <StyledScoreboard>
            <StyledTurnScoreBar>
                {scores.map((value: ScoreValue, index: number) => {
                    return <StyledScoreboardBox key={index}>{value}</StyledScoreboardBox>
                })}
            </StyledTurnScoreBar>
            <StyledScoreboardBox>{totalScore}</StyledScoreboardBox>
        </StyledScoreboard>
    )
}

export default Scoreboard
