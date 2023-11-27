import { configureStore } from "@reduxjs/toolkit";
import SettingsReducer from "./components/reducer/SettingsReducer";
import ScoreReducder from "./components/reducer/ScoreReducder";
import GameReducer from "./components/reducer/GameReducer";

const store = configureStore({
  reducer: {
    settings: SettingsReducer,
    score: ScoreReducder,
    game: GameReducer
  }
})

export default store
export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch