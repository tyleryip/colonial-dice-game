import { configureStore } from "@reduxjs/toolkit";
import diceReducer, { diceSlice } from "../store/slices/diceSlice"
import scoreReducer, { scoreSlice } from "../store/slices/scoreSlice"
import structureReducer, { structureSlice } from "../store/slices/structureSlice"
import knightReducer, { knightSlice } from "./slices/knightSlice";

export const store = configureStore({
    reducer: {
        dice: diceReducer,
        knight: knightReducer,
        score: scoreReducer,
        structure: structureReducer,
    },
    devTools: {
        actionCreators: {
            // Dice actions
            ["Roll Dice"]: diceSlice.actions.rollDice,
            ["Reset Dice"]: diceSlice.actions.resetDice,
            ["Set Dice"]: diceSlice.actions.setDice,
            ["Spend Dice"]: diceSlice.actions.spendDice,
            ["Toggle Lock"]: diceSlice.actions.toggleLock,

            // Knight actions
            ["Build Knight"]: knightSlice.actions.buildKnight,
            ["Reset Knights"]: knightSlice.actions.resetKnights,

            // Score actions
            ["Add Score"]: scoreSlice.actions.addScore,
            ["Reset Score"]: scoreSlice.actions.resetScore,

            // Structure actions
            ["Build Structure"]: structureSlice.actions.buildStructure,
            ["Reset Structures"]: structureSlice.actions.resetStructures,
        }
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch