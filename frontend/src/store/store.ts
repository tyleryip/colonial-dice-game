import { combineReducers, configureStore } from "@reduxjs/toolkit";
import islandOneDiceReducer, { islandOneDiceSlice } from "./slices/session/islandOne/diceSlice/islandOneDiceSlice"
import islandTwoDiceReducer, { islandTwoDiceSlice } from "./slices/session/islandTwo/diceSlice/islandTwoDiceSlice"
import islandOneGameReducer, { islandOneGameSlice } from "./slices/session/islandOne/gameSlice/islandOneGameSlice"
import islandTwoGameReducer, { islandTwoGameSlice } from "./slices/session/islandTwo/gameSlice/islandTwoGameSlice"
import resourceJokerReducer, { resourceJokerSlice } from "./slices/session/islandOne/resourceJokerSlice/resourceJokerSlice"
import knightReducer, { knightSlice } from "./slices/session/islandOne/knightSlice/knightSlice";
import settingsReducer, { settingsSlice } from "./slices/local/settingsSlice/settingsSlice"
import scoreReducer, { scoreSlice } from "./slices/session/islandOne/scoreSlice/scoreSlice"
import islandOneStructureReducer, { islandOneStructureSlice } from "./slices/session/islandOne/structureSlice/islandOneStructureSlice"
import islandTwoStructureReducer, { islandTwoStructureSlice } from "./slices/session/islandTwo/structureSlice/islandTwoStructureSlice"
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { persistStore } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import localStorage from "redux-persist/lib/storage";
import leaderboardReducer, { leaderboardSlice } from "./slices/local/leaderboardSlice/leaderboardSlice";

const islandOneReducer = combineReducers({
    dice: islandOneDiceReducer,
    game: islandOneGameReducer,
    knight: knightReducer,
    resourceJoker: resourceJokerReducer,
    score: scoreReducer,
    structure: islandOneStructureReducer,
})

const islandTwoReducer = combineReducers({
    dice: islandTwoDiceReducer,
    game: islandTwoGameReducer,
    structure: islandTwoStructureReducer
})

const sessionPersistConfig = {
    key: "session",
    storage: sessionStorage
}

const sessionReducer = combineReducers({
    islandOne: islandOneReducer,
    islandTwo: islandTwoReducer
})

const sessionPersistedReducer = persistReducer(sessionPersistConfig, sessionReducer)

const localStoragePersistConfig = {
    key: "local",
    storage: localStorage
}

const localStorageReducer = combineReducers({
    settings: settingsReducer,
    leaderboard: leaderboardReducer
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
            // Local

            // Settings actions
            ["Set Volume"]: settingsSlice.actions.setVolume,
            ["Toggle Mute"]: settingsSlice.actions.toggleMute,
            ["Toggle Show Instructions"]: settingsSlice.actions.toggleShowInstructions,

            // Leaderboard actions
            ["Add Leaderboard Entry"]: leaderboardSlice.actions.addLeaderboardEntry,
            ["Reset Leaderboard"]: leaderboardSlice.actions.resetLeaderboard,

            // ISLAND 1

            // Dice actions
            ["Island One - Clear Resource Joker Flag"]: islandOneDiceSlice.actions.islandOneClearResourceJokerFlag,
            ["Island One - Roll Dice"]: islandOneDiceSlice.actions.islandOneRollDice,
            ["Island One - Reset Dice"]: islandOneDiceSlice.actions.islandOneResetDice,
            ["Island One - Reset Dice Locks"]: islandOneDiceSlice.actions.islandOneResetDiceLocks,
            ["Island One - Set Dice"]: islandOneDiceSlice.actions.islandOneSetDice,
            ["Island One - Set Dice Spent"]: islandOneDiceSlice.actions.islandOneSetDiceSpent,
            ["Island One - Spend Dice"]: islandOneDiceSlice.actions.islandOneSpendDice,
            ["Island One - Toggle Dice Lock"]: islandOneDiceSlice.actions.islandOneToggleDiceLock,

            // Game actions
            ["Island One - Increment Turn"]: islandOneGameSlice.actions.islandOneIncrementTurn,
            ["Island One - Set Game Phase"]: islandOneGameSlice.actions.islandOneSetGamePhase,
            ["Island One - Reset Game"]: islandOneGameSlice.actions.islandOneResetGame,

            // Knight actions
            ["Build Knight"]: knightSlice.actions.buildKnight,
            ["Reset Knights"]: knightSlice.actions.resetKnights,

            // Resource joker actions
            ["Reset Resource Jokers"]: resourceJokerSlice.actions.resetResourceJokers,
            ["Spend Resource Joker"]: resourceJokerSlice.actions.spendResourceJoker,

            // Score actions
            ["Add Score"]: scoreSlice.actions.addScore,
            ["Add To Pending Score"]: scoreSlice.actions.addToPendingScore,
            ["Reset Score"]: scoreSlice.actions.resetScore,

            // Structure actions
            ["Island One - Build Structure"]: islandOneStructureSlice.actions.islandOneBuildStructure,
            ["Island One - Reset Structures"]: islandOneStructureSlice.actions.islandOneResetStructures,

            // ISLAND 2

            // Dice actions
            ["Island Two - Clear Resource Joker Flag"]: islandTwoDiceSlice.actions.islandTwoClearResourceJokerFlag,
            ["Island Two - Roll Dice"]: islandTwoDiceSlice.actions.islandTwoRollDice,
            ["Island Two - Reset Dice"]: islandTwoDiceSlice.actions.islandTwoResetDice,
            ["Island Two - Reset Dice Locks"]: islandTwoDiceSlice.actions.islandTwoResetDiceLocks,
            ["Island Two - Set Dice"]: islandTwoDiceSlice.actions.islandTwoSetDice,
            ["Island Two - Set Dice Spent"]: islandTwoDiceSlice.actions.islandTwoSetDiceSpent,
            ["Island Two - Spend Dice"]: islandTwoDiceSlice.actions.islandTwoSpendDice,
            ["Island Two - Toggle Dice Lock"]: islandTwoDiceSlice.actions.islandTwoToggleDiceLock,

            // Game actions
            ["Island Two - Increment Turn"]: islandTwoGameSlice.actions.islandTwoIncrementTurn,
            ["Island Two - Set Game Phase"]: islandTwoGameSlice.actions.islandTwoSetGamePhase,
            ["Island Two - Reset Game"]: islandTwoGameSlice.actions.islandTwoResetGame,

            // Structure actions
            ["Island 2 - Build Structure"]: islandTwoStructureSlice.actions.islandTwoBuildStructure,
            ["Island 2 - Reset Structures"]: islandTwoStructureSlice.actions.islandTwoResetStructures,
        }
    }
});

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch