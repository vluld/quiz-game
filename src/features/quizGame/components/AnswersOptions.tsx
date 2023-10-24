import AnswerOption from "components/Option/AnswerOption";

function AnswersOptions() {
  return (
    <div className="quiz-game-container-options">
      <div className="quiz-game-container-option">
        <AnswerOption ticker="A" text="selected" state="inactive" />
      </div>
    </div>
  );
}

export default AnswersOptions;
