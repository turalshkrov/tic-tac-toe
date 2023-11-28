import { createSlice } from "@reduxjs/toolkit";

export const wictoryConditions = [
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
  mark: '' | 'x' | 'o',
  class: '' | 'active'
}
type Score = {
  player1: number,
  player2: number
}
type InitialState = { 
  gridItems: GridItem[],
  currentPlayer: 'player-1' | 'player-2'
  score: Score, 
  winner: 'player-1' | 'player-2' | 'draw' | null 
}
const initialState: InitialState = {
  gridItems: [],
  currentPlayer: 'player-1',
  score: {
    player1: 0,
    player2: 0
  },
  winner: null
}
for (let i = 1; i <= 9; i++) {
  initialState.gridItems.push({
    id: i,
    mark: '',
    class: ''
  })
}

export const GameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    played: (state, action) => {
      if (!state.winner && !state.gridItems[action.payload.id].mark) {
        state.gridItems[action.payload.id].mark = state.currentPlayer === 'player-1' ? 'x' : 'o'
        state.currentPlayer = state.currentPlayer === 'player-1' ? 'player-2' : 'player-1';
        const xMark = state.gridItems.filter(item => item.mark === 'x').map(item => item.id)
        const oMark = state.gridItems.filter(item => item.mark === 'o').map(item => item.id)
        wictoryConditions.forEach(con => {
          if(con.every(id => xMark.includes(id))) {
            state.gridItems.filter(item => con.includes(item.id)).map(item => {
              item.class = 'active'
            })
            state.score.player1 += state.winner ? 1 : 0;
            state.winner = 'player-1';
          }
          if(con.every(id => oMark.includes(id))) {
            state.gridItems.filter(item => con.includes(item.id)).map(item => {
              item.class = 'active'
            })
            state.score.player2 += state.winner ? 1 : 0;
            state.winner = 'player-2';
          }
        })
        if (state.gridItems.every(item => item.mark)) {
          state.winner = state.winner ?? 'draw'
        }
      }
    },
    newGame: (state) => { 
      state.gridItems.map(item => { 
        item.mark = ''
        item.class = ''
      })
      state.winner = null
    },
    restart: () => initialState
  }
})

export default GameSlice.reducer
export const { played, newGame, restart } = GameSlice.actions