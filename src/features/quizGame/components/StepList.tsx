import StepOption from "components/Option/StepOption";
import { OptionStateVariant, OptionTextState } from "components/Option/types";
import { memo } from "react";
import { QuizQuestion } from "../types";

type Props = {
  questions: QuizQuestion[];
  currentQuestionIndex: number;
};

function StepList({ questions, currentQuestionIndex }: Props) {
  const getStateForOption = (index: number): OptionStateVariant => {
    if (currentQuestionIndex === index) {
      return "selected";
    }
    return "inactive";
  };

  const getStateForText = (index: number): OptionTextState => {
    if (currentQuestionIndex === index) {
      return "active";
    }
    if (currentQuestionIndex > index) {
      return "inactive";
    }

    return "default";
  };

  return (
    <div className="quiz-game-container-stepsList">
      {questions.map((question, index) => (
        <StepOption
          key={question.id}
          text={`$${question.value}`}
          state={getStateForOption(index)}
          textState={getStateForText(index)}
        />
      ))}
    </div>
  );
}

export default memo(StepList);
