import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GamePhase } from "../../constants/enumerations";
import { RootState } from "../store";

interface gameState {
    currentGamePhase: GamePhase
}

const initialState: gameState = {
    currentGamePhase: GamePhase.Rolling
}

export const gameSlice = createSlice({
    name: 'game',
    initialState: initialState,
    reducers: {
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
        }
    }
})

export default gameSlice.reducer

// Actions

export const { setGamePhase, resetGame } = gameSlice.actions

// Selectors

export function selectIsGamePhaseRolling(state: RootState): boolean {
    return state.game.currentGamePhase == GamePhase.Rolling
}

export function selectIsGamePhaseBuilding(state: RootState): boolean {
    return state.game.currentGamePhase == GamePhase.Building
}