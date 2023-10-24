import CloseIcon from "assets/icons/Close.svg";
import MenuIcon from "assets/icons/Menu.svg";
import useGetScreenSize from "hooks/useGetScreenSize";
import { useState } from "react";
import StepList from "./components/StepList";
import AnswersOptions from "./components/AnswersOptions";

function QuizGame() {
  const [showAnswer, setShowAnswers] = useState(false);
  const { isMobile } = useGetScreenSize();

  const shouldShowAnswers = isMobile ? showAnswer : true;

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
          <img src={showAnswer ? CloseIcon : MenuIcon} alt="" />
        </span>
      )}
      <section className="quiz-game-container-content">
        <div className="quiz-game-container-questions">
          <p className="quiz-game-container-question">
            How old your elder brother was 10 years before you was born, mate?
          </p>
        </div>
        <AnswersOptions />
      </section>
      {shouldShowAnswers && (
        <aside className="quiz-game-container--steps centered">
          <StepList />
        </aside>
      )}
    </div>
  );
}

export default QuizGame;
