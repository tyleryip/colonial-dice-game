import { useAppSelector } from '../../store/hooks'
import { selectScoreValues, selectTotalScore } from '../../store/slices/scoreSlice'
import { ScoreValue } from '../../types/ScoreValue'
import StyledEqualsIcon from './styles/StyledEqualsIcon'
import StyledScoreboard from './styles/StyledScoreboard'
import StyledScoreboardBox from './styles/StyledScoreboardBox'
import StyledTotalScore from './styles/StyledTotalScore'

const Scoreboard = () => {
    const scores = useAppSelector(state => selectScoreValues(state))
    const totalScore = useAppSelector(state => selectTotalScore(state))

    return (
        <StyledScoreboard>
            {scores.map((value: ScoreValue, index: number) => {
                return <StyledScoreboardBox key={index}>{value}</StyledScoreboardBox>
            })}
            <StyledTotalScore >
                <StyledEqualsIcon>{"="}</StyledEqualsIcon>
                <StyledScoreboardBox>{totalScore}</StyledScoreboardBox>
            </StyledTotalScore>
        </StyledScoreboard>
    )
}

export default Scoreboard
