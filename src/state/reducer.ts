import { combineReducers } from "@reduxjs/toolkit";
import quizGameReducer from "features/quizGame/state/quizGameReducerSlice";

export const reducer = combineReducers({
  gameProgress: quizGameReducer,
});
export type ReduxState = ReturnType<typeof reducer>;
