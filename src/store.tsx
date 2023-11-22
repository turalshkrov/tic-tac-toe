import { configureStore } from "@reduxjs/toolkit";
import SettingsReducer from "./components/reducer/SettingsReducer";

const store = configureStore({
  reducer: {
    settings: SettingsReducer
  }
})

export default store
export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch