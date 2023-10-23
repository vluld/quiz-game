import { combineReducers } from "@reduxjs/toolkit";

export const reducer = combineReducers({
  gameProgress: () => ({}),
});
export type ReduxState = ReturnType<typeof reducer>;
