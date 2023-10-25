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
      const isAnswerCorrect =
        state.currentAnswerId ===
        state.questions[state.currentQuestionIndex].correctAnswerId;
      const hasNextQuestion =
        state.currentQuestionIndex < state.questions.length - 1;

      if (isAnswerCorrect) {
        state.earned = state.questions[state.currentQuestionIndex].value;
        if (hasNextQuestion) {
          state.currentQuestionIndex += 1;
          state.currentAnswerId = null;
        }
      } else {
        state.gameStatus = "gameOver";
      }
    },
    resetGame: (state) => {
      state.gameStatus = "inProgress";
      state.earned = 0;
      state.currentQuestionIndex = 0;
      state.currentAnswerId = null;
      state.questions = [];
    },
  },
});

export const { answerQuestion, startGame, checkResult, resetGame } =
  quizGameSlice.actions;

export default quizGameSlice.reducer;
