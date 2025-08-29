import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../../store"
import { Dice } from "../../../../../types/Dice";
import { ResourceType } from "../../../../../constants/resources";
import { DiceState, FindFirstUnspentIndex, GenerateNewDiceValues, HasResourcesNeeded, SetDicePayload, UnlockAllDice } from "../../shared/diceSlice";

const initialState: DiceState = {
    dice: new Array<Dice>(6).fill(
        {
            value: null,
            locked: false,
            spent: false
        }),
    rollCount: 0,
    resourceJokerFlag: null
}

export const islandTwoDiceSlice = createSlice({
    name: 'islandTwoDice',
    initialState: initialState,
    reducers: {
        /**
         * When the user has made a selection for which dice the want to set with the resource joker, or cancel
         * @param state 
         */
        islandTwoClearResourceJokerFlag: (state) => {
            state.resourceJokerFlag = null
        },
        /**
         * When the user clicks the roll button
         * @param state 
         */
        islandTwoRollDice: (state) => {
            state.dice = GenerateNewDiceValues(state.dice)
            state.rollCount += 1;
        },
        /**
         * When the building phase ends and the rolling phase begins
         * @param state 
         */
        islandTwoResetDice: (state) => {
            state.dice = initialState.dice;
            state.rollCount = initialState.rollCount;
            state.resourceJokerFlag = null;
        },
        /**
         * When the user trades their gold in for a resource of their choice
         * @param state 
         * @param action 
        */
        islandTwoSetDice: (state, action: PayloadAction<SetDicePayload>) => {
            state.dice[action.payload.id].value = action.payload.value
        },
        /**
         * When the user stops rolling early and forfeits the rest of their rolls
         * @param state 
         * @param action 
         */
        islandTwoSetRollCount: (state, action: PayloadAction<number>) => {
            state.rollCount = action.payload
        },
        /**
         * When the user builds a structure and loses resource in their inventory
         * @param state 
         * @param action
         */
        islandTwoSetDiceSpent: (state, action: PayloadAction<number>) => {
            state.dice[action.payload].spent = true
        },
        /**
         * When the user clicks a resource joker and wants to pick a dice to set
         * @param state 
         * @param action 
         */
        islandTwoSetResourceJokerFlag: (state, action: PayloadAction<number>) => {
            state.resourceJokerFlag = action.payload
        },
        /**
         * When the user trades two gold in for a resource of their choice, set one of the gold to spent
         * @param state 
         * @param action
         */
        islandTwoSpendDice: (state, action: PayloadAction<string>) => {
            const resourceType: ResourceType = JSON.parse(action.payload)
            const firstUnspentIndex = FindFirstUnspentIndex(state.dice, resourceType)
            state.dice[firstUnspentIndex].spent = true
        },
        /**
         * When the user switches the lock on a dice between rolls
         * @param state 
         * @param action 
         */
        islandTwoToggleDiceLock: (state, action: PayloadAction<number>) => {
            state.dice[action.payload].locked = !state.dice[action.payload].locked
        },
        /**
         * When the roll phase ends and all dice should appear unlocked
         * @param state 
         */
        islandTwoResetDiceLocks: (state) => {
            state.dice = UnlockAllDice(state.dice)
        }
    }
})

export default islandTwoDiceSlice.reducer;

// Actions

export const {
    islandTwoClearResourceJokerFlag,
    islandTwoRollDice,
    islandTwoResetDice,
    islandTwoResetDiceLocks,
    islandTwoSetDice,
    islandTwoSetRollCount,
    islandTwoSetDiceSpent,
    islandTwoSetResourceJokerFlag,
    islandTwoSpendDice,
    islandTwoToggleDiceLock
} = islandTwoDiceSlice.actions

// Selectors

export const selectIslandTwoDice = (state: RootState) => state.session.islandTwo.dice.dice
export const selectIslandTwoRollCount = (state: RootState) => state.session.islandTwo.dice.rollCount
export const selectIslandTwoResourceJokerFlag = (state: RootState) => state.session.islandTwo.dice.resourceJokerFlag

export const selectIslandTwoAnyDiceSpent = (state: RootState) => state.session.islandTwo.dice.dice.some(dice => dice.spent)
export const selectIslandTwoAllDiceSpent = (state: RootState) => state.session.islandTwo.dice.dice.every(dice => dice.spent)

export const selectIslandTwoHasResourcesNeeded = (state: RootState, cost: ResourceType[]): boolean => {
    return HasResourcesNeeded(state.session.islandTwo.dice.dice, cost)
}
