/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizQuestion } from "../types";

export interface QuizGameState {
  earned: number;
  gameStatus: "inProgress" | "won" | "gameOver" | "notStarted";
  currentQuestionIndex: number;
  currentAnswerId: string | null;
  questions: QuizQuestion[];
}

const initialState: QuizGameState = {
  earned: 0,
  gameStatus: "notStarted",
  currentQuestionIndex: 0,
  currentAnswerId: null,
  questions: [],
};

export const quizGameSlice = createSlice({
  name: "quizGame",
  initialState,
  reducers: {
    startGame: (state, action: PayloadAction<any[]>) => {
      state.questions = action.payload;
      state.gameStatus = "inProgress";
      state.earned = 0;
      state.currentQuestionIndex = 0;
    },
    answerQuestion: (state, action) => {
      state.currentAnswerId = action.payload;
    },
    checkResult: (state) => {
      if (
        state.currentAnswerId ===
        state.questions[state.currentQuestionIndex].correctAnswerId
      ) {
        state.earned = state.questions[state.currentQuestionIndex].value;
        state.currentQuestionIndex += 1;
        state.currentAnswerId = null;
      } else {
        state.gameStatus = "gameOver";
      }
    },
  },
});

export const { answerQuestion, startGame, checkResult } = quizGameSlice.actions;

export default quizGameSlice.reducer;
