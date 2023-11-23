import { configureStore } from "@reduxjs/toolkit";
import SettingsReducer from "./components/reducer/SettingsReducer";
import ScoreReducder from "./components/reducer/ScoreReducder";

const store = configureStore({
  reducer: {
    settings: SettingsReducer,
    score: ScoreReducder
  }
})

export default store
export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch