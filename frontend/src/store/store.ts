import { combineReducers, configureStore } from "@reduxjs/toolkit";
import islandOneDiceReducer, { islandOneDiceSlice } from "./slices/session/islandOne/diceSlice/islandOneDiceSlice"
import islandTwoDiceReducer, { islandTwoDiceSlice } from "./slices/session/islandTwo/diceSlice/islandTwoDiceSlice"
import islandOneGameReducer, { islandOneGameSlice } from "./slices/session/islandOne/gameSlice/islandOneGameSlice"
import islandTwoGameReducer, { islandTwoGameSlice } from "./slices/session/islandTwo/gameSlice/islandTwoGameSlice"
import islandOneResourceJokerReducer, { islandOneResourceJokerSlice } from "./slices/session/islandOne/resourceJokerSlice/islandOneResourceJokerSlice"
import islandTwoResourceJokerReducer, { islandTwoResourceJokerSlice } from "./slices/session/islandTwo/resourceJokerSlice/islandTwoResourceJokerSlice";
import islandOneKnightReducer, { islandOneKnightSlice } from "./slices/session/islandOne/knightSlice/islandOneKnightSlice";
import islandTwoKnightReducer, { islandTwoKnightSlice } from "./slices/session/islandTwo/knightSlice/islandTwoKnightSlice";
import settingsReducer, { settingsSlice } from "./slices/local/settingsSlice/settingsSlice"
import islandOneScoreReducer, { islandOneScoreSlice } from "./slices/session/islandOne/scoreSlice/islandOneScoreSlice"
import islandTwoScoreReducer, { islandTwoScoreSlice } from "./slices/session/islandTwo/scoreSlice/islandTwoScoreSlice"
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
    knight: islandOneKnightReducer,
    resourceJoker: islandOneResourceJokerReducer,
    score: islandOneScoreReducer,
    structure: islandOneStructureReducer,
})

const islandTwoReducer = combineReducers({
    dice: islandTwoDiceReducer,
    game: islandTwoGameReducer,
    knight: islandTwoKnightReducer,
    resourceJoker: islandTwoResourceJokerReducer,
    score: islandTwoScoreReducer,
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
            ["Island One - Build Knight"]: islandOneKnightSlice.actions.islandOneBuildKnight,
            ["Island One - Reset Knights"]: islandOneKnightSlice.actions.islandOneResetKnights,

            // Resource joker actions
            ["Island One - Reset Resource Jokers"]: islandOneResourceJokerSlice.actions.islandOneResetResourceJokers,
            ["Island One - Spend Resource Joker"]: islandOneResourceJokerSlice.actions.islandOneSpendResourceJoker,

            // Score actions
            ["Island One - Add Score"]: islandOneScoreSlice.actions.islandOneAddScore,
            ["Island One - Add To Pending Score"]: islandOneScoreSlice.actions.islandOneAddToPendingScore,
            ["Island One - Reset Score"]: islandOneScoreSlice.actions.islandOneResetScore,

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

            // Knight actions
            ["Island Two - Build Knight"]: islandTwoKnightSlice.actions.islandTwoBuildKnight,
            ["Island Two - Reset Knights"]: islandTwoKnightSlice.actions.islandTwoResetKnights,

            // Resource joker actions
            ["Island Two - Reset Resource Jokers"]: islandTwoResourceJokerSlice.actions.islandTwoResetResourceJokers,
            ["Island Two - Spend Resource Joker"]: islandTwoResourceJokerSlice.actions.islandTwoSpendResourceJoker,

            // Score actions
            ["Island Two - Add Score"]: islandTwoScoreSlice.actions.islandTwoAddScore,
            ["Island Two - Add To Pending Score"]: islandTwoScoreSlice.actions.islandTwoAddToPendingScore,
            ["Island Two - Reset Score"]: islandTwoScoreSlice.actions.islandTwoResetScore,

            // Structure actions
            ["Island Two - Build Structure"]: islandTwoStructureSlice.actions.islandTwoBuildStructure,
            ["Island Two - Reset Structures"]: islandTwoStructureSlice.actions.islandTwoResetStructures,
        }
    }
});

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch