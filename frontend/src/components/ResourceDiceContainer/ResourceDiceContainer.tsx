import { useState } from "react"
import ResourceDice from "../ResourceDice/ResourceDice"
import StyledButtonTray from "./styles/StyledButtonTray"
import StyledDiceTray from "./styles/StyledDiceTray"
import StyledResourceDiceContainer from "./styles/StyledResourceDiceContainer"

const ResourceDiceContainer = () => {
    const [rolling, setRolling] = useState(false)
    const [diceValues, setDiceValues] = useState([1, 2, 3, 4, 5, 6])
    const [diceLocked, setDiceLocked] = useState([false, false, false, false, false])

    const rollDuration = 0.75

    function generateRandomDiceValue(): number {
        return Math.floor(Math.random() * 6 + 1)
    }

    function handleRollButtonCLicked() {
        setTimeout(() => {
            setDiceValues(diceValues.map((value: number, index: number, array: number[]) => {
                if (diceLocked[index]) {
                    return value
                }
                return generateRandomDiceValue()
            }))
            setRolling(false);
        }, rollDuration * 1000);

        setRolling(true);
    }

    function handleToggleDiceLocked(id: number) {
        console.log(`Toggling Dice with id=${id}`)

        const newDiceLocked = [...diceLocked]
        newDiceLocked[id - 1] = !diceLocked[id - 1]
        setDiceLocked(newDiceLocked)
    }

    return (
        <StyledResourceDiceContainer>
            <StyledDiceTray>
                <ResourceDice id={1} value={diceValues[0]} rolling={rolling && !diceLocked[0]} rollDuration={rollDuration} locked={diceLocked[0]} onToggleDiceLocked={handleToggleDiceLocked} />
                <ResourceDice id={2} value={diceValues[1]} rolling={rolling && !diceLocked[1]} rollDuration={rollDuration} locked={diceLocked[1]} onToggleDiceLocked={handleToggleDiceLocked} />
                <ResourceDice id={3} value={diceValues[2]} rolling={rolling && !diceLocked[2]} rollDuration={rollDuration} locked={diceLocked[2]} onToggleDiceLocked={handleToggleDiceLocked} />
                <ResourceDice id={4} value={diceValues[3]} rolling={rolling && !diceLocked[3]} rollDuration={rollDuration} locked={diceLocked[3]} onToggleDiceLocked={handleToggleDiceLocked} />
                <ResourceDice id={5} value={diceValues[4]} rolling={rolling && !diceLocked[4]} rollDuration={rollDuration} locked={diceLocked[4]} onToggleDiceLocked={handleToggleDiceLocked} />
                <ResourceDice id={6} value={diceValues[5]} rolling={rolling && !diceLocked[5]} rollDuration={rollDuration} locked={diceLocked[5]} onToggleDiceLocked={handleToggleDiceLocked} />
            </StyledDiceTray>
            <StyledButtonTray >
                <button onClick={handleRollButtonCLicked}>Roll</button>
            </StyledButtonTray>
        </StyledResourceDiceContainer>
    )
}

export default ResourceDiceContainer
