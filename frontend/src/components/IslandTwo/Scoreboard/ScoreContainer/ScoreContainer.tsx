import { useAppSelector } from '../../../../store/hooks'
import { selectIslandTwoScore } from '../../../../store/slices/session/islandTwo/scoreSlice/islandTwoScoreSlice'
import StyledScoreBox from './styles/StyledScoreBox'
import StyledScoreContainer from './styles/StyledScoreContainer'
import checked_box from '/assets/scoreboard/checked-box.png'
import unchecked_box from '/assets/scoreboard/unchecked-box.png'



const ScoreContainer = () => {
    // Selectors

    const score = useAppSelector(state => selectIslandTwoScore(state))

    return (
        <StyledScoreContainer>
            {Array.from({ length: 10 }).map((_, index) => {
                return <StyledScoreBox key={index} src={score > index ? checked_box : unchecked_box} />
            })}
        </StyledScoreContainer>
    )
}

export default ScoreContainer
