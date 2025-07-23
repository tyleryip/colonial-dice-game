import { ResourceType } from "../../../../constants/resources"
import { Dice } from "../../../../types/Dice"
import { DiceValue } from "../../../../types/DiceValue"

// State

export interface DiceState {
    dice: Dice[],
    rollCount: number,
    resourceJokerFlag: number | null
}

// Action payloads

export interface SetDicePayload {
    id: number,
    value: DiceValue
}

// Helper functions

/**
 * Determines if the user can build this structure or knight based on unspent inventory
 * @param dice: the user's current inventory 
 * @param cost the cost of the structure or knight
 * @returns true if the user can build, false otherwise
 */
export const HasResourcesNeeded = (dice: Dice[], cost: ResourceType[]): boolean => {
    // Need to keep track of which dice are spent
    const spentDice: number[] = []
    dice.forEach((dice: Dice, diceId: number) => {
        if (dice.spent) {
            spentDice.push(diceId)
        }
    })

    let canBuild = true;
    cost.forEach((resourceType: ResourceType) => {
        const index = dice.findIndex((dice: Dice, index: number) => dice.value == resourceType.id && !spentDice.includes(index))

        if (index == -1) {
            canBuild = false
        }

        spentDice.push(index)
    })

    return canBuild
}

/**
 * Returns the index of the first unspent dice of a specific ResourceType, otherwise throws an error
 * @param dice an array of dice
 * @param resourceType the resource to find
 * @returns the index of the first unspent dice
 */
export const FindFirstUnspentIndex = (dice: Dice[], resourceType: ResourceType): number => {
    for (let index = 0; index < dice.length; index++) {
        if (dice[index].value == resourceType.id && !dice[index].spent) {
            return index
        }
    }

    throw new Error(`No unspent ${resourceType.toString()} found`)
}

/**
 * Set all dice locked state to false
 * @param dice an array of dice
 * @returns the updated array of dice
 */
export const UnlockAllDice = (dice: Dice[]): Dice[] => {
    return dice.map((d: Dice) => {
        return {
            value: d.value,
            locked: false,
            spent: d.spent
        }
    })
}

/**
 * Generates new values for all unlocked dice
 * @param dice an array of dice
 * @returns the updated array of dice
 */
export const GenerateNewDiceValues = (dice: Dice[]): Dice[] => {
    return dice.map((d: Dice) => {
        return {
            value: d.locked ? d.value : generateRandomDiceValue(),
            locked: d.locked,
            spent: d.spent
        }
    })
}

/**
 * 
 * @returns a random number between 0 and 5 inclusive
 */
const generateRandomDiceValue = (): DiceValue => {
    return Math.floor(Math.random() * 6) as DiceValue
}