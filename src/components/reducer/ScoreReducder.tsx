import { createSlice } from "@reduxjs/toolkit";

type ScoreState = {
  player1: number,
  player2: number
}

const initialState: ScoreState = {
  player1: 0,
  player2: 0
}

export const scoreSlicer = createSlice({
  name: 'score',
  initialState,
  reducers: {
    player1Win: (state) => {
      state.player1 += 1;
    },
    player2Win: (state) => {
      state.player2 += 1;
    },
    restart: () => initialState
  }
})

export default scoreSlicer.reducer
export const { player1Win, player2Win, restart } = scoreSlicer.actions