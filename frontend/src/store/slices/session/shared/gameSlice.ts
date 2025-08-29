import { GamePhase } from "../../../../constants/enumerations";

// State

export interface GameState {
    currentGamePhase: GamePhase,
    currentTurn: number
}