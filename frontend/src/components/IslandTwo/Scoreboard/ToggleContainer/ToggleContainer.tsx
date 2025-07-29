import StyledToggleContainer from './styles/StyledToggleContainer'
import StyledToggle from './styles/StyledToggle'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { islandTwoToggleLargestArmy, islandTwoToggleLongestRoad, selectIslandTwoHasLargestArmy, selectIslandTwoHasLongestRoad } from '../../../../store/slices/session/islandTwo/scoreSlice/islandTwoScoreSlice'
import unchecked_longest_road from '/assets/scoreboard/unchecked-longest-road.png'
import unchecked_largest_army from '/assets/scoreboard/unchecked-largest-army.png'
import checked_longest_road from '/assets/scoreboard/checked-longest-road.png'
import checked_largest_army from '/assets/scoreboard/checked-largest-army.png'
import { selectIslandTwoIsStructureBuilt } from '../../../../store/slices/session/islandTwo/structureSlice/islandTwoStructureSlice'
import { selectIslandTwoKnightsBuiltTotal } from '../../../../store/slices/session/islandTwo/knightSlice/islandTwoKnightSlice'

const ToggleContainer = () => {
    // Dispatch

    const dispatch = useAppDispatch()

    // Selectors

    const hasLongestRoad = useAppSelector(state => selectIslandTwoHasLongestRoad(state))
    const hasLargestArmy = useAppSelector(state => selectIslandTwoHasLargestArmy(state))

    // Must have built road with id=12 to have 5 consecutive roads
    const hasMinimumRoadsBuilt = useAppSelector(state => selectIslandTwoIsStructureBuilt(state, 12))
    const numberOfKnightsBuilt = useAppSelector(state => selectIslandTwoKnightsBuiltTotal(state))

    // Conditional rendering

    const disableLongestRoad = !hasMinimumRoadsBuilt
    const disableLargestArmy = numberOfKnightsBuilt < 3

    const longestRoadTooltip = disableLongestRoad
        ? "Build 5 or more consecutive roads"
        : "Toggle Longest Road"

    const largestArmyTooltip = disableLargestArmy
        ? "Build 3 or more knights"
        : "Toggle Largest Army"

    // Event handlers

    const handleLongestRoadChanged = () => {
        if (disableLongestRoad) {
            return
        }

        dispatch(islandTwoToggleLongestRoad())
    }

    const handleLargestArmyChanged = () => {
        if (disableLargestArmy) {
            return
        }

        dispatch(islandTwoToggleLargestArmy())
    }

    return (
        <StyledToggleContainer>
            <StyledToggle
                title={longestRoadTooltip}
                $disabled={disableLongestRoad}
                onClick={handleLongestRoadChanged}
                src={hasLongestRoad ? checked_longest_road : unchecked_longest_road} />
            <StyledToggle
                title={largestArmyTooltip}
                $disabled={disableLargestArmy}
                onClick={handleLargestArmyChanged}
                src={hasLargestArmy ? checked_largest_army : unchecked_largest_army} />
        </StyledToggleContainer>
    )
}

export default ToggleContainer
