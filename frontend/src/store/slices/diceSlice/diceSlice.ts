import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store"
import { DiceValue } from "../../../types/DiceValue";
import { Dice } from "../../../types/Dice";
import { ResourceType } from "../../../constants/resources";

export interface DiceState {
    dice: Dice[],
    rollCount: number,
    resourceJokerFlag: number | null,
    wildcardJokerFlag: number | null
}

const initialState: DiceState = {
    dice: new Array<Dice>(6).fill(
        {
            value: null,
            locked: false,
            spent: false
        }),
    rollCount: 0,
    resourceJokerFlag: null,
    wildcardJokerFlag: null
}

export const diceSlice = createSlice({
    name: 'dice',
    initialState: initialState,
    reducers: {
        /**
         * When the user has made a selection for which dice the want to set with the resource joker, or cancel
         * @param state 
         */
        clearResourceJokerFlag: (state) => {
            state.resourceJokerFlag = null
        },
        /**
         * When the user has made a selection for which dice the want to set with the wildcard joker, or cancel
         * @param state 
         */
        clearWildcardJokerFlag: (state) => {
            state.wildcardJokerFlag = null
        },
        /**
         * When the user clicks the roll button
         * @param state 
         */
        rollDice: (state) => {
            state.dice = generateNewDiceValues(state.dice)
            state.rollCount += 1;
        },
        /**
         * When the building phase ends and the rolling phase begins
         * @param state 
         */
        resetDice: (state) => {
            state.dice = initialState.dice;
            state.rollCount = initialState.rollCount;
            state.resourceJokerFlag = null;
            state.wildcardJokerFlag = null;
        },
        /**
         * When the user trades their gold in for a resource of their choice
         * @param state 
         * @param action 
        */
        setDice: (state, action: PayloadAction<SetDicePayload>) => {
            state.dice[action.payload.id].value = action.payload.value
        },
        /**
         * When the user stops rolling early and forfeits the rest of their rolls
         * @param state 
         * @param action 
         */
        setRollCount: (state, action: PayloadAction<number>) => {
            state.rollCount = action.payload
        },
        /**
         * When the user builds a structure and loses resource in their inventory
         * @param state 
         * @param action
         */
        setDiceSpent: (state, action: PayloadAction<number>) => {
            state.dice[action.payload].spent = true
        },
        /**
         * When the user clicks a resource joker and wants to pick a dice to set
         * @param state 
         * @param action 
         */
        setResourceJokerFlag: (state, action: PayloadAction<number>) => {
            state.resourceJokerFlag = action.payload
        },
        /**
         * When the user clicks a resource joker and wants to pick a dice to set
         * @param state 
         * @param action 
         */
        setWildcardJokerFlag: (state, action: PayloadAction<number>) => {
            state.wildcardJokerFlag = action.payload
        },
        /**
         * When the user trades two gold in for a resource of their choice, set one of the gold to spent
         * @param state 
         * @param action
         */
        spendDice: (state, action: PayloadAction<string>) => {
            const resourceType: ResourceType = JSON.parse(action.payload)
            const firstUnspentIndex = findFirstUnspentIndex(state.dice, resourceType)
            state.dice[firstUnspentIndex].spent = true
        },
        /**
         * When the user switches the lock on a dice between rolls
         * @param state 
         * @param action 
         */
        toggleDiceLock: (state, action: PayloadAction<number>) => {
            state.dice[action.payload].locked = !state.dice[action.payload].locked
        },
        /**
         * When the roll phase ends and all dice should appear unlocked
         * @param state 
         */
        resetDiceLocks: (state) => {
            state.dice = unlockAllDice(state.dice)
        }
    }
})

export default diceSlice.reducer;

// Actions

export interface SetDicePayload {
    id: number,
    value: DiceValue
}

export const {
    clearResourceJokerFlag,
    clearWildcardJokerFlag,
    rollDice,
    resetDice,
    resetDiceLocks,
    setDice,
    setRollCount,
    setDiceSpent,
    setResourceJokerFlag,
    setWildcardJokerFlag,
    spendDice,
    toggleDiceLock
} = diceSlice.actions

// Selectors

export const selectDice = (state: RootState) => state.session.dice.dice
export const selectRollCount = (state: RootState) => state.session.dice.rollCount
export const selectResourceJokerFlag = (state: RootState) => state.session.dice.resourceJokerFlag
export const selectWildcardJokerFlag = (state: RootState) => state.session.dice.wildcardJokerFlag

export const selectAnyDiceSpent = (state: RootState) => state.session.dice.dice.some(dice => dice.spent)
export const selectAllDiceSpent = (state: RootState) => state.session.dice.dice.every(dice => dice.spent)

/**
 * Determines if the user can build this structure or knight based on unspent inventory
 * @param state 
 * @param cost the cost of the structure or knight
 * @returns true if the user can build, false otherwise
 */
export const selectHasResourcesNeeded = (state: RootState, cost: ResourceType[]): boolean => {
    // Need to keep track of which dice are spent
    const spentDice: number[] = []
    state.session.dice.dice.forEach((dice: Dice, diceId: number) => {
        if (dice.spent) {
            spentDice.push(diceId)
        }
    })

    let canBuild = true;
    cost.forEach((resourceType: ResourceType) => {
        const index = state.session.dice.dice.findIndex((dice: Dice, index: number) => dice.value == resourceType.id && !spentDice.includes(index))

        if (index == -1) {
            canBuild = false
        }

        spentDice.push(index)
    })


    return canBuild
}

// Helper functions

function findFirstUnspentIndex(dice: Dice[], resourceType: ResourceType): number {
    for (let index = 0; index < dice.length; index++) {
        if (dice[index].value == resourceType.id && !dice[index].spent) {
            return index
        }
    }

    throw new Error(`No unspent ${resourceType.toString()} found`)
}

function generateNewDiceValues(dice: Dice[]): Dice[] {
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
function generateRandomDiceValue(): DiceValue {
    return Math.floor(Math.random() * 6) as DiceValue
}

function unlockAllDice(dice: Dice[]): Dice[] {
    return dice.map((d: Dice) => {
        return {
            value: d.value,
            locked: false,
            spent: d.spent
        }
    })
}