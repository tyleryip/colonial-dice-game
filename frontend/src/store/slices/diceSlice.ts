import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store"
import { DiceValue } from "../../types/DiceValue";
import { ResourceType } from "../../constants/enumerations";

interface diceState {
    diceValues: DiceValue[],
    isLocked: boolean[],
    rollCount: number,
    isSpent: boolean[]
}

const initialState: diceState = {
    diceValues: [null, null, null, null, null, null],
    isLocked: [false, false, false, false, false, false],
    isSpent: [false, false, false, false, false, false],
    rollCount: 0
}

export const diceSlice = createSlice({
    name: 'dice',
    initialState: initialState,
    reducers: {
        /**
         * When the user clicks the roll button
         * @param state 
         */
        rollDice: (state) => {
            state.diceValues = generateNewDiceValues(state.diceValues, state.isLocked)
            state.rollCount += 1;
        },
        /**
         * When the building phase ends and the rolling phase begins
         * @param state 
         */
        resetDice: (state) => {
            state.diceValues = [null, null, null, null, null, null];
            state.isLocked = [false, false, false, false, false, false];
            state.isSpent = [false, false, false, false, false, false];
            state.rollCount = 0;
        },
        /**
         * When the user trades their gold in for a resource of their choice
         * @param state 
         * @param action 
        */
        setDice: (state, action: PayloadAction<SetDicePayload>) => {
            state.diceValues[action.payload.id] = action.payload.value
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
        spendDice: (state, action: PayloadAction<number>) => {
            state.isSpent[action.payload] = true
        },
        /**
         * When the user trades two gold in for a resource of their choice, set one of the gold to spent
         * @param state 
         */
        spendGold: (state) => {
            const firstGoldIndex = findFirstUnspentGoldIndex(state.diceValues, state.isSpent)
            state.isSpent[firstGoldIndex] = true
        },
        /**
         * When the user switches the lock on a dice between rolls
         * @param state 
         * @param action 
         */
        toggleDiceLock: (state, action: PayloadAction<number>) => {
            state.isLocked[action.payload] = !state.isLocked[action.payload]
        },
        /**
         * When the roll phase ends and all dice should appear unlocked
         * @param state 
         */
        unlockAllDice: (state) => {
            state.isLocked = [false, false, false, false, false, false];
        }
    }
})

export default diceSlice.reducer;

// Actions

export interface SetDicePayload {
    id: number,
    value: DiceValue
}

export const { rollDice, resetDice, setDice, setRollCount, spendDice, spendGold, toggleDiceLock, unlockAllDice } = diceSlice.actions

// Selectors

export const selectDiceValues = (state: RootState) => state.dice.diceValues
export const selectIsLocked = (state: RootState) => state.dice.isLocked
export const selectIsSpent = (state: RootState) => state.dice.isSpent
export const selectRollCount = (state: RootState) => state.dice.rollCount

// Helper functions

function findFirstUnspentGoldIndex(values: DiceValue[], isSpent: boolean[]): number {
    for (let index = 0; index < values.length; index++) {
        if (values[index] == ResourceType.Gold && !isSpent[index]) {
            return index
        }
    }

    throw new Error("No unspent gold found")
}

function generateNewDiceValues(values: DiceValue[], isLocked: boolean[]) {
    return values.map((value: DiceValue, index: number) => {
        return isLocked[index] ? value : generateRandomDiceValue()
    })
}

function generateRandomDiceValue(): DiceValue {
    return Math.floor(Math.random() * 6) as DiceValue
}
