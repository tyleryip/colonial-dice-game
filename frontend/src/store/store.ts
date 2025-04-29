import { configureStore } from "@reduxjs/toolkit";
import diceReducer, { diceSlice } from "../store/slices/diceSlice"
import scoreReducer, { scoreSlice } from "../store/slices/scoreSlice"

export const store = configureStore({
    reducer: {
        dice: diceReducer,
        score: scoreReducer
    },
    devTools: {
        actionCreators: {
            // Dice actions
            ["Roll Dice"]: diceSlice.actions.rollDice,
            ["Reset Dice"]: diceSlice.actions.resetDice,
            ["Set Dice"]: diceSlice.actions.setDice,
            ["Spend Dice"]: diceSlice.actions.spendDice,
            ["Toggle Lock"]: diceSlice.actions.toggleLock,

            // Score actions
            ["Add Score"]: scoreSlice.actions.addScore,
            ["Reset Score"]: scoreSlice.actions.resetScore,
        }
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch