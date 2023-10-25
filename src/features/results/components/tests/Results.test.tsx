import { configureStore } from "@reduxjs/toolkit";
import { screen } from "@testing-library/react";
import quizQuestions from "data/quizData.json";
import {
  answerQuestion,
  checkResult,
  startGame,
} from "features/quizGame/state/quizGameReducerSlice";
import { reducer } from "state/reducer";
import { renderApp } from "tests/setup";
import Results from "../Results";

describe("Results page", () => {
  const store = configureStore({
    reducer,
  });

  test("renders earned amount on result page", () => {
    store.dispatch(startGame(quizQuestions));
    store.dispatch(answerQuestion(2));
    store.dispatch(checkResult());
    store.dispatch(answerQuestion(1));
    store.dispatch(checkResult());
    store.dispatch(answerQuestion(2));
    store.dispatch(checkResult());

    renderApp(<Results />, store);

    const amountTitle = screen.getByText(/Earned/i);
    expect(amountTitle).toBeInTheDocument();

    const amount = screen.getByText(/\$300/i);
    expect(amount).toBeInTheDocument();
  });
});
