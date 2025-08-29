import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../store"

export interface SettingsState {
    mute: boolean
    showInstructions: boolean
    volume: number
}

const initialState: SettingsState = {
    mute: false,
    showInstructions: true,
    volume: 0.5
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: initialState,
    reducers: {
        toggleMute: (state) => {
            state.mute = !state.mute
        },
        toggleShowInstructions: (state) => {
            state.showInstructions = !state.showInstructions
        },
        setVolume: (state, action: PayloadAction<number>) => {
            state.volume = action.payload
        }
    }
})

export default settingsSlice.reducer

// Actions

export const {
    setVolume,
    toggleMute,
    toggleShowInstructions
} = settingsSlice.actions

// Selectors

export const selectMute = (state: RootState) => state.local.settings.mute
export const selectShowInstructions = (state: RootState) => state.local.settings.showInstructions

// Display volume = the volume displayed in the settings modal (if muted, display volume = volume)
export const selectDisplayVolume = (state: RootState) => state.local.settings.volume

// Effective volume = the volume used to play sound effects (if muted, volume = 0)
export const selectEffectiveVolume = (state: RootState) => {
    if (state.local.settings.mute) {
        return 0
    }

    return state.local.settings.volume
}