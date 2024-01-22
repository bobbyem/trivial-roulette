import { combineReducers, configureStore } from "@reduxjs/toolkit";
import questionReducer from "./slicesTemp/QuestionSlice";
import playerReducer from "./slicesTemp/PlayerSlice";
import appReducer from "./slicesTemp/AppState";
const reducers = combineReducers({
  questionReducer,
  playerReducer,
  appReducer,
});
export const store = configureStore({
  reducer: reducers,
});
export type RootState = ReturnType<typeof store.getState>;
