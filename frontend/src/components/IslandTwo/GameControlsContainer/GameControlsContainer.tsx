import { useState } from "react"
import ResourceDice from "../ResourceDice/ResourceDice"
import StyledButtonTray from "./styles/StyledButtonTray"
import StyledDiceTray from "./styles/StyledDiceTray"
import StyledGameControlsContainer from "./styles/StyledGameControlsContainer"
import { useAppSelector } from "../../../store/hooks"
import RollButton from "../Buttons/RollButton/RollButton"
import BuildButton from "../Buttons/BuildButton/BuildButton"
import { Dice } from "../../../types/Dice"
import { ResourceType } from "../../../constants/resources"
import Instructions from "../Instructions/Instructions"
import { selectIslandTwoDice, selectIslandTwoResourceJokerFlag, selectIslandTwoRollCount } from "../../../store/slices/session/islandTwo/diceSlice/islandTwoDiceSlice"
import { selectIslandTwoIsGamePhaseBuilding, selectIslandTwoIsGamePhaseRolling } from "../../../store/slices/session/islandTwo/gameSlice/islandTwoGameSlice"

const GameControlsContainer = () => {
    // Props and constants

    const [rolling, setRolling] = useState(false)
    const rollDurationMilliseconds = 1000

    // Selectors

    const dice = useAppSelector(state => selectIslandTwoDice(state))
    const rollCount = useAppSelector(state => selectIslandTwoRollCount(state))
    const gamePhaseRolling = useAppSelector(state => selectIslandTwoIsGamePhaseRolling(state))
    const gamePhaseBuilding = useAppSelector(state => selectIslandTwoIsGamePhaseBuilding(state))
    const resourceJokerFlag = useAppSelector(state => selectIslandTwoResourceJokerFlag(state))

    // Conditional rendering

    const rollButtonDisabled =
        (gamePhaseRolling && rollCount >= 3)
        || gamePhaseBuilding
        || rolling

    const buildButtonDisabled =
        (gamePhaseRolling && rollCount == 0)
        || (resourceJokerFlag != null)

    // Tradeable = more than 1 unspent gold dice
    const isTradeable = dice
        .map((dice: Dice) => dice.value == ResourceType.GOLD.id && !dice.spent)
        .filter(result => result == true)
        .length > 1

    return (
        <StyledGameControlsContainer>
            <StyledDiceTray>
                {dice.map((dice: Dice, id: number) =>
                    <ResourceDice
                        key={id}
                        id={id}
                        value={dice.value}
                        rolling={rolling}
                        rollDurationMilliseconds={rollDurationMilliseconds}
                        isLocked={dice.locked}
                        isSpent={dice.spent}
                        isTradeable={isTradeable} />
                )}
            </StyledDiceTray>
            <StyledButtonTray >
                <RollButton
                    disabled={rollButtonDisabled}
                    setRolling={setRolling}
                    rollDurationMilliseconds={rollDurationMilliseconds}
                    rollCount={rollCount} />
                <BuildButton
                    disabled={buildButtonDisabled} />
            </StyledButtonTray>
            <Instructions
                rolling={rolling}
                canTrade={isTradeable} />
        </StyledGameControlsContainer>
    )
}

export default GameControlsContainer
