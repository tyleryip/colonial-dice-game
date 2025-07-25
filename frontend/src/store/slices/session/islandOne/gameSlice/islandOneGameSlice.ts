import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GamePhase } from "../../../../../constants/enumerations";
import { RootState } from "../../../../store";
import { GameState } from "../../shared/gameSlice";

const initialState: GameState = {
    currentGamePhase: GamePhase.Rolling,
    currentTurn: 0
}

export const islandOneGameSlice = createSlice({
    name: 'islandOneGame',
    initialState: initialState,
    reducers: {
        /**
         * When a turn has passed
         * @param state 
         */
        islandOneIncrementTurn: (state) => {
            state.currentTurn += 1
        },
        /**
         * When the game switches between phases
         * @param state 
         * @param action 
         */
        islandOneSetGamePhase: (state, action: PayloadAction<GamePhase>) => {
            state.currentGamePhase = action.payload
        },
        /**
         * When the game is reset, set phase back to starting phase
         * @param state 
         */
        islandOneResetGame: (state) => {
            state.currentGamePhase = GamePhase.Rolling
            state.currentTurn = 0
        }
    }
})

export default islandOneGameSlice.reducer

// Actions

export const {
    islandOneIncrementTurn,
    islandOneSetGamePhase,
    islandOneResetGame
} = islandOneGameSlice.actions

// Selectors

export const selectIslandOneCurrentTurn = (state: RootState) => state.session.islandOne.game.currentTurn

export function selectIslandOneIsGamePhaseRolling(state: RootState): boolean {
    return state.session.islandOne.game.currentGamePhase == GamePhase.Rolling
}

export function selectIslandOneIsGamePhaseBuilding(state: RootState): boolean {
    return state.session.islandOne.game.currentGamePhase == GamePhase.Building
}