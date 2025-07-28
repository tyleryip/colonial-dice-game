import StyledToggleContainer from './styles/StyledToggleContainer'
import StyledToggle from './styles/StyledToggle'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { islandTwoToggleLargestArmy, islandTwoToggleLongestRoad, selectIslandTwoHasLargestArmy, selectIslandTwoHasLongestRoad } from '../../../../store/slices/session/islandTwo/scoreSlice/islandTwoScoreSlice'
import unchecked_longest_road from '/assets/scoreboard/unchecked-longest-road.png'
import unchecked_largest_army from '/assets/scoreboard/unchecked-largest-army.png'
import checked_longest_road from '/assets/scoreboard/checked-longest-road.png'
import checked_largest_army from '/assets/scoreboard/checked-largest-army.png'

const ToggleContainer = () => {
    // Dispatch

    const dispatch = useAppDispatch()

    // Selectors

    const hasLongestRoad = useAppSelector(state => selectIslandTwoHasLongestRoad(state))
    const hasLargestArmy = useAppSelector(state => selectIslandTwoHasLargestArmy(state))

    // Event handlers

    const handleLongestRoadChanged = () => {
        dispatch(islandTwoToggleLongestRoad())
    }

    const handleLargestArmyChanged = () => {
        dispatch(islandTwoToggleLargestArmy())
    }

    return (
        <StyledToggleContainer>
            <StyledToggle onClick={handleLongestRoadChanged} src={hasLongestRoad ? checked_longest_road : unchecked_longest_road} />
            <StyledToggle onClick={handleLargestArmyChanged} src={hasLargestArmy ? checked_largest_army : unchecked_largest_army} />
        </StyledToggleContainer>
    )
}

export default ToggleContainer
