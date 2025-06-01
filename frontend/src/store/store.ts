import { combineReducers, configureStore } from "@reduxjs/toolkit";
import diceReducer, { diceSlice } from "./slices/diceSlice/diceSlice"
import gameReducer, { gameSlice } from "../store/slices/gameSlice/gameSlice"
import resourceJokerReducer, { resourceJokerSlice } from "../store/slices/resourceJokerSlice/resourceJokerSlice"
import knightReducer, { knightSlice } from "./slices/knightSlice/knightSlice";
import settingsReducer, { settingsSlice } from "./slices/settingsSlice/settingsSlice"
import scoreReducer, { scoreSlice } from "../store/slices/scoreSlice/scoreSlice"
import structureReducer, { structureSlice } from "../store/slices/structureSlice/structureSlice"
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { persistStore } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import localStorage from "redux-persist/lib/storage";

const sessionPersistConfig = {
    key: "session",
    storage: sessionStorage
}

const sessionReducer = combineReducers({
    dice: diceReducer,
    game: gameReducer,
    knight: knightReducer,
    resourceJoker: resourceJokerReducer,
    score: scoreReducer,
    structure: structureReducer,
})

const sessionPersistedReducer = persistReducer(sessionPersistConfig, sessionReducer)

const localStoragePersistConfig = {
    key: "local",
    storage: localStorage
}

const localStorageReducer = combineReducers({
    settings: settingsReducer
})

const localStoragePersistedReducer = persistReducer(localStoragePersistConfig, localStorageReducer)

const rootReducer = combineReducers({
    session: sessionPersistedReducer,
    local: localStoragePersistedReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }),
    devTools: {
        actionCreators: {
            // Dice actions
            ["Clear Resource Joker Flag"]: diceSlice.actions.clearResourceJokerFlag,
            ["Roll Dice"]: diceSlice.actions.rollDice,
            ["Reset Dice"]: diceSlice.actions.resetDice,
            ["Reset Dice Locks"]: diceSlice.actions.resetDiceLocks,
            ["Set Dice"]: diceSlice.actions.setDice,
            ["Set Dice Spent"]: diceSlice.actions.setDiceSpent,
            ["Spend Dice"]: diceSlice.actions.spendDice,
            ["Toggle Dice Lock"]: diceSlice.actions.toggleDiceLock,

            // Game actions
            ["Increment Turn"]: gameSlice.actions.incrementTurn,
            ["Set Game Phase"]: gameSlice.actions.setGamePhase,
            ["Reset Game"]: gameSlice.actions.resetGame,

            // Knight actions
            ["Build Knight"]: knightSlice.actions.buildKnight,
            ["Reset Knights"]: knightSlice.actions.resetKnights,

            // Resource joker actions
            ["Reset Resource Jokers"]: resourceJokerSlice.actions.resetResourceJokers,
            ["Spend Resource Joker"]: resourceJokerSlice.actions.spendResourceJoker,

            // Settings actions
            ["Toggle Mute"]: settingsSlice.actions.toggleMute,
            ["Set Volume"]: settingsSlice.actions.setVolume,

            // Score actions
            ["Add Score"]: scoreSlice.actions.addScore,
            ["Add To Pending Score"]: scoreSlice.actions.addToPendingScore,
            ["Reset Score"]: scoreSlice.actions.resetScore,

            // Structure actions
            ["Build Structure"]: structureSlice.actions.buildStructure,
            ["Reset Structures"]: structureSlice.actions.resetStructures,
        }
    }
});

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch