import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store"

export interface settingsState {
    mute: boolean
    volume: number
}

const initialState: settingsState = {
    mute: false,
    volume: 0.5
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: initialState,
    reducers: {
        toggleMute: (state) => {
            state.mute = !state.mute
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
    toggleMute
} = settingsSlice.actions

// Selectors

export const selectMute = (state: RootState) => state.local.settings.mute

// DIsplay volume = the volume displayed in the settings modal (if muted, display volume = volume)
export const selectDisplayVolume = (state: RootState) => state.local.settings.volume

// Effective volume = the volume used to play sound effects (if muted, volume = 0)
export const selectEffectiveVolume = (state: RootState) => {
    if (state.local.settings.mute) {
        return 0
    }

    return state.local.settings.volume
}