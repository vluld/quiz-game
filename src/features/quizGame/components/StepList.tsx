import StepOption from "components/Option/StepOption";
import { QuizQuestion } from "../types";

type Props = {
  questions: QuizQuestion[];
  currentQuestionIndex: number;
};

function StepList({ questions, currentQuestionIndex }: Props) {
  const getStateForOption = (index: number) => {
    if (currentQuestionIndex === index) {
      return "selected";
    }
    if (currentQuestionIndex > index) {
      return "inactive";
    }
    return "inactive";
  };

  return (
    <div className="quiz-game-container-stepsList">
      {questions.map((question, index) => (
        <StepOption
          key={question.id}
          text={`$${question.value}`}
          state={getStateForOption(index)}
        />
      ))}
    </div>
  );
}

export default StepList;
