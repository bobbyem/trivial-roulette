import { combineReducers, configureStore } from "@reduxjs/toolkit";
import questionReducer from "./slices/QuestionSlice";
import playerReducer from "./slices/PlayerSlice";
import appReducer from "./slices/AppState";
const reducers = combineReducers({
  questionReducer,
  playerReducer,
  appReducer,
});
export const store = configureStore({
  reducer: reducers,
});
export type RootState = ReturnType<typeof store.getState>;
