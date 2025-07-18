import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../../store"
import { Dice } from "../../../../../types/Dice";
import { ResourceType } from "../../../../../constants/resources";
import { DiceState, FindFirstUnspentIndex, GenerateNewDiceValues, SetDicePayload, UnlockAllDice } from "../../shared/diceSlice";

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

export const islandOneDiceSlice = createSlice({
    name: 'islandOneDice',
    initialState: initialState,
    reducers: {
        /**
         * When the user has made a selection for which dice the want to set with the resource joker, or cancel
         * @param state 
         */
        islandOneClearResourceJokerFlag: (state) => {
            state.resourceJokerFlag = null
        },
        /**
         * When the user has made a selection for which dice the want to set with the wildcard joker, or cancel
         * @param state 
         */
        islandOneClearWildcardJokerFlag: (state) => {
            state.wildcardJokerFlag = null
        },
        /**
         * When the user clicks the roll button
         * @param state 
         */
        islandOneRollDice: (state) => {
            state.dice = GenerateNewDiceValues(state.dice)
            state.rollCount += 1;
        },
        /**
         * When the building phase ends and the rolling phase begins
         * @param state 
         */
        islandOneResetDice: (state) => {
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
        islandOneSetDice: (state, action: PayloadAction<SetDicePayload>) => {
            state.dice[action.payload.id].value = action.payload.value
        },
        /**
         * When the user stops rolling early and forfeits the rest of their rolls
         * @param state 
         * @param action 
         */
        islandOneSetRollCount: (state, action: PayloadAction<number>) => {
            state.rollCount = action.payload
        },
        /**
         * When the user builds a structure and loses resource in their inventory
         * @param state 
         * @param action
         */
        islandOneSetDiceSpent: (state, action: PayloadAction<number>) => {
            state.dice[action.payload].spent = true
        },
        /**
         * When the user clicks a resource joker and wants to pick a dice to set
         * @param state 
         * @param action 
         */
        islandOneSetResourceJokerFlag: (state, action: PayloadAction<number>) => {
            state.resourceJokerFlag = action.payload
        },
        /**
         * When the user clicks a resource joker and wants to pick a dice to set
         * @param state 
         * @param action 
         */
        islandOneSetWildcardJokerFlag: (state, action: PayloadAction<number>) => {
            state.wildcardJokerFlag = action.payload
        },
        /**
         * When the user trades two gold in for a resource of their choice, set one of the gold to spent
         * @param state 
         * @param action
         */
        islandOneSpendDice: (state, action: PayloadAction<string>) => {
            const resourceType: ResourceType = JSON.parse(action.payload)
            const firstUnspentIndex = FindFirstUnspentIndex(state.dice, resourceType)
            state.dice[firstUnspentIndex].spent = true
        },
        /**
         * When the user switches the lock on a dice between rolls
         * @param state 
         * @param action 
         */
        islandOneToggleDiceLock: (state, action: PayloadAction<number>) => {
            state.dice[action.payload].locked = !state.dice[action.payload].locked
        },
        /**
         * When the roll phase ends and all dice should appear unlocked
         * @param state 
         */
        islandOneResetDiceLocks: (state) => {
            state.dice = UnlockAllDice(state.dice)
        }
    }
})

export default islandOneDiceSlice.reducer;

// Actions

export const {
    islandOneClearResourceJokerFlag,
    islandOneClearWildcardJokerFlag,
    islandOneRollDice,
    islandOneResetDice,
    islandOneResetDiceLocks,
    islandOneSetDice,
    islandOneSetRollCount,
    islandOneSetDiceSpent,
    islandOneSetResourceJokerFlag,
    islandOneSetWildcardJokerFlag,
    islandOneSpendDice,
    islandOneToggleDiceLock,
} = islandOneDiceSlice.actions

// Selectors

export const selectIslandOneDice = (state: RootState) => state.session.islandOne.dice.dice
export const selectIslandOneRollCount = (state: RootState) => state.session.islandOne.dice.rollCount
export const selectIslandOneResourceJokerFlag = (state: RootState) => state.session.islandOne.dice.resourceJokerFlag
export const selectIslandOneWildcardJokerFlag = (state: RootState) => state.session.islandOne.dice.wildcardJokerFlag

export const selectIslandOneAnyDiceSpent = (state: RootState) => state.session.islandOne.dice.dice.some(dice => dice.spent)
export const selectIslandOneAllDiceSpent = (state: RootState) => state.session.islandOne.dice.dice.every(dice => dice.spent)

/**
 * Determines if the user can build this structure or knight based on unspent inventory
 * @param state 
 * @param cost the cost of the structure or knight
 * @returns true if the user can build, false otherwise
 */
export const selectIslandOneHasResourcesNeeded = (state: RootState, cost: ResourceType[]): boolean => {
    // Need to keep track of which dice are spent
    const spentDice: number[] = []
    state.session.islandOne.dice.dice.forEach((dice: Dice, diceId: number) => {
        if (dice.spent) {
            spentDice.push(diceId)
        }
    })

    let canBuild = true;
    cost.forEach((resourceType: ResourceType) => {
        const index = state.session.islandOne.dice.dice.findIndex((dice: Dice, index: number) => dice.value == resourceType.id && !spentDice.includes(index))

        if (index == -1) {
            canBuild = false
        }

        spentDice.push(index)
    })

    return canBuild
}
