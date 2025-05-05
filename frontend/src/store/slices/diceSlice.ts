import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store"
import { DiceValue } from "../../types/DiceValue";
import { Dice } from "../../types/Dice";
import { ResourceType } from "../../constants/enumerations";

interface diceState {
    dice: Dice[],
    rollCount: number,
}

const initialState: diceState = {
    dice: new Array(6).fill(
        {
            value: null,
            locked: false,
            spent: false
        }),
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
        spendDice: (state, action: PayloadAction<number>) => {
            state.dice[action.payload].spent = true
        },
        /**
         * When the user trades two gold in for a resource of their choice, set one of the gold to spent
         * @param state 
         */
        spendGold: (state) => {
            const firstGoldIndex = findFirstUnspentGoldIndex(state.dice)
            state.dice[firstGoldIndex].spent = true
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

export const { rollDice, resetDice, resetDiceLocks, setDice, setRollCount, spendDice, spendGold, toggleDiceLock } = diceSlice.actions

// Selectors

export const selectDice = (state: RootState) => state.dice.dice
export const selectRollCount = (state: RootState) => state.dice.rollCount

// Helper functions

function findFirstUnspentGoldIndex(dice: Dice[]): number {
    for (let index = 0; index < dice.length; index++) {
        if (dice[index].value == ResourceType.Gold && !dice[index].spent) {
            return index
        }
    }

    throw new Error("No unspent gold found")
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