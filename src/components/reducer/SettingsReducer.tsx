import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SettingsState = {
  gameMode: 'pvc' | 'pvp'
  players: {
    player1: string,
    player2: string
  }
}

const initialState: SettingsState = {
  gameMode: 'pvc',
  players: {
    player1: '',
    player2: ''
  }
}

export const settingsReducer = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    gameModeChange: (state, action: PayloadAction<'pvc' | 'pvp'>) => {
      state.gameMode = action.payload
    },
    updatePlayer1: (state, action: PayloadAction<string>) => {
      state.players.player1 = action.payload
    },
    updatePlayer2: (state, action: PayloadAction<string>) => {
      state.players.player2 = action.payload
    },
    reset: () => initialState
  }
})

export default settingsReducer.reducer
export const { gameModeChange, updatePlayer1, updatePlayer2, reset } = settingsReducer.actions