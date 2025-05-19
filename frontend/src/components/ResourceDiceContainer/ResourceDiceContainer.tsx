import { useState } from "react"
import ResourceDice from "../ResourceDice/ResourceDice"
import StyledButtonTray from "./styles/StyledButtonTray"
import StyledDiceTray from "./styles/StyledDiceTray"
import StyledResourceDiceContainer from "./styles/StyledResourceDiceContainer"
import { useAppSelector } from "../../store/hooks"
import { selectDice, selectResourceJokerFlag, selectRollCount, selectWildcardJokerFlag } from "../../store/slices/diceSlice/diceSlice"
import RollButton from "../Buttons/RollButton/RollButton"
import BuildButton from "../Buttons/BuildButton/BuildButton"
import { selectIsGamePhaseBuilding, selectIsGamePhaseRolling } from "../../store/slices/gameSlice/gameSlice"
import { Dice } from "../../types/Dice"
import { ResourceType } from "../../constants/resources"

const ResourceDiceContainer = () => {
    // Props and constants

    const [rolling, setRolling] = useState(false)
    const rollDurationMilliseconds = 750

    // Selectors

    const dice = useAppSelector(state => selectDice(state))
    const rollCount = useAppSelector(state => selectRollCount(state))
    const gamePhaseRolling = useAppSelector(state => selectIsGamePhaseRolling(state))
    const gamePhaseBuilding = useAppSelector(state => selectIsGamePhaseBuilding(state))
    const resourceJokerFlag = useAppSelector(state => selectResourceJokerFlag(state))
    const wildcardJokerFlag = useAppSelector(state => selectWildcardJokerFlag(state))

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
        <StyledResourceDiceContainer>
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
        </StyledResourceDiceContainer>
    )
}

export default ResourceDiceContainer
