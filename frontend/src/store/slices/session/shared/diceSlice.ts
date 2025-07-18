import { ResourceType } from "../../../../constants/resources"
import { Dice } from "../../../../types/Dice"
import { DiceValue } from "../../../../types/DiceValue"

// State

export interface DiceState {
    dice: Dice[],
    rollCount: number,
    resourceJokerFlag: number | null,
    wildcardJokerFlag: number | null
}

// Action payloads

export interface SetDicePayload {
    id: number,
    value: DiceValue
}

// Helper functions

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