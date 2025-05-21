import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"

export interface settingsSlice {
    mute: boolean
}

const initialState: settingsSlice = {
    mute: false
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: initialState,
    reducers: {
        toggleMute: (state) => {
            state.mute = !state.mute
        }
    }
})

export default settingsSlice.reducer

// Actions

export const {
    toggleMute
} = settingsSlice.actions

// Selectors

export const selectMute = (state: RootState) => state.local.settings.mute