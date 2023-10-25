import CloseIcon from "assets/icons/Close.svg";
import MenuIcon from "assets/icons/Menu.svg";
import quizData from "data/quizData.json";
import useGetScreenSize from "hooks/useGetScreenSize";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { useNavigate } from "react-router-dom";
import AnswersOptions from "./components/AnswersOptions";
import Question from "./components/Question";
import StepList from "./components/StepList";
import {
  answerQuestion,
  checkResult,
  startGame,
} from "./state/quizGameReducerSlice";
import {
  getCurrentAnswerId,
  getCurrentQuestion,
  getCurrentQuestionIndex,
  getGameStatus,
  getIsLastQuestion,
  getQuestions,
} from "./state/quizGameSelectors";

function QuizGame() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isMobile } = useGetScreenSize();

  const currentQuestion = useAppSelector(getCurrentQuestion);
  const gameStatus = useAppSelector(getGameStatus);
  const questions = useAppSelector(getQuestions);
  const currentQuestionIndex = useAppSelector(getCurrentQuestionIndex);
  const currentAnswerId = useAppSelector(getCurrentAnswerId);
  const isLastQuestion = useAppSelector(getIsLastQuestion);

  const isGameOver = gameStatus === "gameOver";

  const [showAnswer, setShowAnswers] = useState(false);

  const shouldShowAnswers = isMobile ? showAnswer : true;
  const answeredLastQuestion = isLastQuestion && currentAnswerId !== null;

  useEffect(() => {
    dispatch(startGame(quizData));
  }, [dispatch]);

  useEffect(() => {
    if (isGameOver || answeredLastQuestion) {
      navigate("/results");
    }
  }, [isGameOver, navigate, answeredLastQuestion]);

  const onAnswerClick = useCallback(
    (answerId: string) => {
      dispatch(answerQuestion(answerId));
      if (isLastQuestion) {
        dispatch(checkResult());
      } else {
        setTimeout(() => {
          dispatch(checkResult());
        }, 500);
      }
    },
    [dispatch, isLastQuestion],
  );

  return (
    <div className="quiz-game-container">
      {isMobile && (
        // Since it will be used on mobile, we don't need keyboard support
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <span
          role="button"
          tabIndex={0}
          onClick={() => setShowAnswers((prev) => !prev)}
          className="quiz-game-container--mobileButton"
        >
          <img
            src={showAnswer ? CloseIcon : MenuIcon}
            alt={showAnswer ? "Close answers" : "Open answers"}
          />
        </span>
      )}
      {questions.length > 0 && (
        <section className="quiz-game-container-content">
          <Question text={currentQuestion.question} />
          <AnswersOptions
            answers={currentQuestion.answers}
            onAnswerClick={onAnswerClick}
            currentAnswerId={currentAnswerId}
            correctAnswerId={currentQuestion.correctAnswerId}
          />
        </section>
      )}
      {questions.length > 0 && shouldShowAnswers && (
        <aside className="quiz-game-container--steps centered fullscreen">
          <StepList
            questions={questions}
            currentQuestionIndex={currentQuestionIndex}
          />
        </aside>
      )}
    </div>
  );
}

export default QuizGame;
