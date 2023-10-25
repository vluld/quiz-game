import { RootState } from "state/store";

export const getQuestions = (state: RootState) => state.gameProgress.questions;

export const getCurrentQuestionIndex = (state: RootState) =>
  state.gameProgress.currentQuestionIndex;

export const getEarnedAmount = (state: RootState) => state.gameProgress.earned;

export const getGameStatus = (state: RootState) =>
  state.gameProgress.gameStatus;

export const getCurrentQuestion = (state: RootState) =>
  state.gameProgress.questions[state.gameProgress.currentQuestionIndex];

export const getCurrentAnswerId = (state: RootState) =>
  state.gameProgress.currentAnswerId;

export const getIsLastQuestion = (state: RootState) =>
  state.gameProgress.currentQuestionIndex ===
  state.gameProgress.questions.length - 1;
