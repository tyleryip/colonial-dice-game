import { useState } from "react"
import ResourceDice from "../ResourceDice/ResourceDice"
import StyledButtonTray from "./styles/StyledButtonTray"
import StyledDiceTray from "./styles/StyledDiceTray"
import StyledGameControlsContainer from "./styles/StyledGameControlsContainer"
import { useAppSelector } from "../../../store/hooks"
import { selectIslandOneDice, selectIslandOneResourceJokerFlag, selectIslandOneRollCount, selectIslandOneWildcardJokerFlag } from "../../../store/slices/session/islandOne/diceSlice/islandOneDiceSlice"
import RollButton from "../Buttons/RollButton/RollButton"
import BuildButton from "../Buttons/BuildButton/BuildButton"
import { selectIslandOneIsGamePhaseBuilding, selectIslandOneIsGamePhaseRolling } from "../../../store/slices/session/islandOne/gameSlice/islandOneGameSlice"
import { Dice } from "../../../types/Dice"
import { ResourceType } from "../../../constants/resources"
import Instructions from "../Instructions/Instructions"

const GameControlsContainer = () => {
    // Props and constants

    const [rolling, setRolling] = useState(false)
    const rollDurationMilliseconds = 1000

    // Selectors

    const dice = useAppSelector(state => selectIslandOneDice(state))
    const rollCount = useAppSelector(state => selectIslandOneRollCount(state))
    const gamePhaseRolling = useAppSelector(state => selectIslandOneIsGamePhaseRolling(state))
    const gamePhaseBuilding = useAppSelector(state => selectIslandOneIsGamePhaseBuilding(state))
    const resourceJokerFlag = useAppSelector(state => selectIslandOneResourceJokerFlag(state))
    const wildcardJokerFlag = useAppSelector(state => selectIslandOneWildcardJokerFlag(state))

    // Conditional rendering

    const rollButtonDisabled =
        (gamePhaseRolling && rollCount >= 3)
        || gamePhaseBuilding
        || rolling

    const buildButtonDisabled =
        (gamePhaseRolling && rollCount == 0)
        || resourceJokerFlag != null
        || wildcardJokerFlag != null

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
