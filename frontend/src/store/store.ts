import { configureStore } from "@reduxjs/toolkit";
import diceReducer, { diceSlice } from "../store/slices/diceSlice"
import gameReducer, { gameSlice } from "../store/slices/gameSlice"
import resourceJokerReducer, { resourceJokerSlice } from "../store/slices/resourceJokerSlice"
import knightReducer, { knightSlice } from "./slices/knightSlice";
import scoreReducer, { scoreSlice } from "../store/slices/scoreSlice"
import structureReducer, { structureSlice } from "../store/slices/structureSlice"

export const store = configureStore({
    reducer: {
        dice: diceReducer,
        game: gameReducer,
        knight: knightReducer,
        resourceJoker: resourceJokerReducer,
        score: scoreReducer,
        structure: structureReducer,
    },
    devTools: {
        actionCreators: {
            // Dice actions
            ["Roll Dice"]: diceSlice.actions.rollDice,
            ["Reset Dice"]: diceSlice.actions.resetDice,
            ["Reset Dice Locks"]: diceSlice.actions.resetDiceLocks,
            ["Set Dice"]: diceSlice.actions.setDice,
            ["Spend Dice"]: diceSlice.actions.spendDice,
            ["Spend Gold"]: diceSlice.actions.spendGold,
            ["Toggle Dice Lock"]: diceSlice.actions.toggleDiceLock,

            // Game actions
            ["Set Game Phase"]: gameSlice.actions.setGamePhase,
            ["Reset Game"]: gameSlice.actions.resetGame,

            // Knight actions
            ["Build Knight"]: knightSlice.actions.buildKnight,
            ["Reset Knights"]: knightSlice.actions.resetKnights,

            // Resource joker actions
            ["Build Resource Joker"]: resourceJokerSlice.actions.buildResourceJoker,
            ["Reset Resource Jokers"]: resourceJokerSlice.actions.resetResourceJokers,
            ["Spend Resource Joker"]: resourceJokerSlice.actions.spendResourceJoker,

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