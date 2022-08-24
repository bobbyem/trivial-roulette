import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import questionReducer from "./Slices/QuestionSlice";
import playerReducer from "./Slices/PlayerSlice";
import appReducer from "./Slices/AppState";
const reducers = combineReducers({
  questionReducer,
  playerReducer,
  appReducer,
});
export const store = () =>
  configureStore({
    reducer: reducers,
  });

export type RootState = ReturnType<typeof reducers>;
