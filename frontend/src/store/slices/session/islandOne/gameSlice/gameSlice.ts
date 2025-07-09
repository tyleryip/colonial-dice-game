import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GamePhase } from "../../../../../constants/enumerations";
import { RootState } from "../../../../store";

export interface GameState {
    currentGamePhase: GamePhase,
    currentTurn: number
}

const initialState: GameState = {
    currentGamePhase: GamePhase.Rolling,
    currentTurn: 0
}

export const gameSlice = createSlice({
    name: 'game',
    initialState: initialState,
    reducers: {
        /**
         * When a turn has passed
         * @param state 
         */
        incrementTurn: (state) => {
            state.currentTurn += 1
        },
        /**
         * When the game switches between phases
         * @param state 
         * @param action 
         */
        setGamePhase: (state, action: PayloadAction<GamePhase>) => {
            state.currentGamePhase = action.payload
        },
        /**
         * When the game is reset, set phase back to starting phase
         * @param state 
         */
        resetGame: (state) => {
            state.currentGamePhase = GamePhase.Rolling
            state.currentTurn = 0
        }
    }
})

export default gameSlice.reducer

// Actions

export const { incrementTurn, setGamePhase, resetGame } = gameSlice.actions

// Selectors

export const selectCurrentTurn = (state: RootState) => state.session.islandOne.game.currentTurn

export function selectIsGamePhaseRolling(state: RootState): boolean {
    return state.session.islandOne.game.currentGamePhase == GamePhase.Rolling
}

export function selectIsGamePhaseBuilding(state: RootState): boolean {
    return state.session.islandOne.game.currentGamePhase == GamePhase.Building
}