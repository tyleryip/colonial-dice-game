import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GamePhase } from "../../../../../constants/enumerations";
import { RootState } from "../../../../store";
import { GameState } from "../../shared/gameSlice";

const initialState: GameState = {
    currentGamePhase: GamePhase.Rolling,
    currentTurn: 1
}

export const islandTwoGameSlice = createSlice({
    name: 'islandTwoGame',
    initialState: initialState,
    reducers: {
        /**
         * When a turn has passed
         * @param state 
         */
        islandTwoIncrementTurn: (state) => {
            state.currentTurn += 1
        },
        /**
         * When the game switches between phases
         * @param state 
         * @param action 
         */
        islandTwoSetGamePhase: (state, action: PayloadAction<GamePhase>) => {
            state.currentGamePhase = action.payload
        },
        /**
         * When the game is reset, set phase back to starting phase
         * @param state 
         */
        islandTwoResetGame: (state) => {
            state.currentGamePhase = GamePhase.Rolling
            state.currentTurn = 1
        }
    }
})

export default islandTwoGameSlice.reducer

// Actions

export const {
    islandTwoIncrementTurn,
    islandTwoSetGamePhase,
    islandTwoResetGame
} = islandTwoGameSlice.actions

// Selectors

export const selectIslandTwoCurrentTurn = (state: RootState) => state.session.islandTwo.game.currentTurn

export function selectIslandTwoIsGamePhaseRolling(state: RootState): boolean {
    return state.session.islandTwo.game.currentGamePhase == GamePhase.Rolling
}

export function selectIslandTwoIsGamePhaseBuilding(state: RootState): boolean {
    return state.session.islandTwo.game.currentGamePhase == GamePhase.Building
}