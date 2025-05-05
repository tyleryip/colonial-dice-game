import { useState } from "react"
import ResourceDice from "../ResourceDice/ResourceDice"
import StyledButtonTray from "./styles/StyledButtonTray"
import StyledDiceTray from "./styles/StyledDiceTray"
import StyledResourceDiceContainer from "./styles/StyledResourceDiceContainer"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { resetDice, resetDiceLocks, rollDice, selectDice, selectRollCount, setRollCount, toggleDiceLock } from "../../store/slices/diceSlice"
import RollButton from "../Buttons/RollButton/RollButton"
import BuildButton from "../Buttons/BuildButton/BuildButton"
import { selectIsGamePhaseBuilding, selectIsGamePhaseRolling, setGamePhase } from "../../store/slices/gameSlice"
import { GamePhase, ResourceType } from "../../constants/enumerations"
import { Dice } from "../../types/Dice"

const ResourceDiceContainer = () => {
    const dice = useAppSelector((state) => selectDice(state))
    const gamePhaseRolling = useAppSelector((state) => selectIsGamePhaseRolling(state))
    const gamePhaseBuilding = useAppSelector((state) => selectIsGamePhaseBuilding(state))

    const rollCount = useAppSelector((state) => selectRollCount(state))

    const dispatch = useAppDispatch();

    const [rolling, setRolling] = useState(false)
    const rollDurationMilliseconds = 750

    // Event handlers

    function handleRollButtonClicked() {
        if (gamePhaseBuilding) {
            // if the user is starting to roll after completing the build phase, we need to update the phase to rolling
            dispatch(setGamePhase(GamePhase.Rolling))
        }

        setTimeout(() => {
            // Generate new values for the dice after rolling
            dispatch(rollDice());

            // Stop rolling animation
            setRolling(false);

        }, rollDurationMilliseconds);

        // Start rolling animation
        setRolling(true);
    }

    function handleBuildButtonClicked() {
        if (gamePhaseRolling) {
            dispatch(setGamePhase(GamePhase.Building))

            // Remove the locks from the dice since they cannot be rolled anymore
            dispatch(resetDiceLocks())

            // Make all the dice in the Roll Button appear used
            dispatch(setRollCount(3))
        }

        if (gamePhaseBuilding) {
            dispatch(setGamePhase(GamePhase.Rolling))
            dispatch(resetDice())
        }
    }

    // Conditional rendering

    const rollButtonDisabled = (gamePhaseRolling && rollCount >= 3)
        || gamePhaseBuilding
        || rolling

    const buildButtonDisabled = (gamePhaseRolling && rollCount == 0)

    const isTradeable = dice
        .map((dice: Dice) => dice.value == ResourceType.Gold && !dice.spent)
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
                        isTradeable={isTradeable}
                        onToggleDiceLocked={() => dispatch(toggleDiceLock(id))} />
                )}
            </StyledDiceTray>
            <StyledButtonTray >
                <RollButton disabled={rollButtonDisabled} handleClick={handleRollButtonClicked} rollCount={rollCount} />
                <BuildButton disabled={buildButtonDisabled} handleClick={handleBuildButtonClicked} />
            </StyledButtonTray>
        </StyledResourceDiceContainer>
    )
}

export default ResourceDiceContainer
