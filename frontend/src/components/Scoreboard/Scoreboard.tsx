import { useAppSelector } from '../../store/hooks'
import { selectCurrentTurn } from '../../store/slices/gameSlice'
import { selectPendingScore, selectScoreValues } from '../../store/slices/scoreSlice'
import { ScoreValue } from '../../types/ScoreValue'
import StyledEqualsIcon from './styles/StyledEqualsIcon'
import StyledScoreboard from './styles/StyledScoreboard'
import StyledScoreboardBox from './styles/StyledScoreboardBox'
import StyledTotalScore from './styles/StyledTotalScore'

const Scoreboard = () => {
    const scores = useAppSelector(state => selectScoreValues(state))
    const pendingScore = useAppSelector(state => selectPendingScore(state))
    const currentTurn = useAppSelector(state => selectCurrentTurn(state))

    function formatScoreboardDisplayValue(value: ScoreValue): string {
        if (value == null || value <= 0) {
            return "X"
        }

        return value.toString();
    }

    function getScoreboardBoxDisplayValue(index: number): string {
        if (scores[index] != null) {
            return formatScoreboardDisplayValue(scores[index])
        }

        if (scores[index] == null && index == currentTurn && pendingScore != null && pendingScore > 0) {
            return formatScoreboardDisplayValue(pendingScore)
        }

        return ""
    }

    function getTotalScoreDisplayValue(): string {
        let totalScore = scores.reduce((accumulator: number, currentValue: ScoreValue) => {
            return accumulator + (currentValue ?? 0);
        }, 0)

        // Only add pending score if it iis greater than 0, X will be applied on end of turn
        if (pendingScore != null && pendingScore > 0) {
            totalScore += pendingScore
        }

        // If total score is 0 and the game just started, don't display total score
        return totalScore == 0 && currentTurn == 0 ? "" : `${totalScore}`
    }

    return (
        <StyledScoreboard>
            {Array.from({ length: 15 }).map((_, index: number) => {
                return <StyledScoreboardBox key={index} $pending={index == currentTurn}>{getScoreboardBoxDisplayValue(index)}</StyledScoreboardBox>
            })}
            <StyledTotalScore >
                <StyledEqualsIcon>{"="}</StyledEqualsIcon>
                <StyledScoreboardBox $pending={pendingScore != null && pendingScore > 0}>{getTotalScoreDisplayValue()}</StyledScoreboardBox>
            </StyledTotalScore>
        </StyledScoreboard>
    )
}

export default Scoreboard