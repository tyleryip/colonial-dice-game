import { useAppSelector } from '../../../../store/hooks'
import { selectIslandTwoCurrentTurn } from '../../../../store/slices/session/islandTwo/gameSlice/islandTwoGameSlice'
import StyledCurrentTurnContainer from './styles/StyledCurrentTurnContainer'
import StyledCurrentTurnCounter from './styles/StyledCurrentTurnCounter'
import StyledCurrentTurnLabel from './styles/StyledCurrentTurnLabel'

const CurrentTurnBox = () => {
    // Selectors

    const currentTurn = useAppSelector(state => selectIslandTwoCurrentTurn(state))

    return (
        <StyledCurrentTurnContainer>
            <StyledCurrentTurnLabel>
                {"Current Turn"}
            </StyledCurrentTurnLabel>
            <StyledCurrentTurnCounter>
                {currentTurn}
            </StyledCurrentTurnCounter>
        </StyledCurrentTurnContainer>
    )
}

export default CurrentTurnBox
