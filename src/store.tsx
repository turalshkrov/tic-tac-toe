import { configureStore } from "@reduxjs/toolkit";
import SettingsReducer from "./components/reducer/SettingsReducer";
import GameReducer from "./components/reducer/GameReducer";

const store = configureStore({
  reducer: {
    settings: SettingsReducer,
    game: GameReducer
  }
})

export default store
export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch