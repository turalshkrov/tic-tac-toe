import { createSlice } from "@reduxjs/toolkit";

const wictoryConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

type GridItem = {
  id: number,
  mark: '' | 'x' | 'o'
}
type Score = {
  player1: number,
  player2: number
}
const initialState: { gridItems: GridItem[], score: Score } = {
  gridItems: [],
  score: {
    player1: 0,
    player2: 0
  }
}
for (let i = 1; i <= 9; i++) {
  initialState.gridItems.push({
    id: i,
    mark: ''
  })
}

export const GameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    played: (state, action) => {
      if (!state.gridItems[action.payload.id].mark) {
        state.gridItems[action.payload.id].mark = action.payload.currentPlayer === 'player-1' ? 'x' : 'o'
      }
      const xMark = state.gridItems.filter(item => item.mark === 'x').map(item => item.id)
      const oMark = state.gridItems.filter(item => item.mark === 'o').map(item => item.id)
      wictoryConditions.forEach(con => {
        if(con.every(id => xMark.includes(id))) {
          state.score.player1 += 1;
        }
        if(con.every(id => oMark.includes(id))) {
          state.score.player2 += 1;
        }
      })
    },
    reset: () => initialState
  }
})

export default GameSlice.reducer
export const { played, reset } = GameSlice.actions