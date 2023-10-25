import AnswerOption from "components/Option/AnswerOption";
import { OptionStateVariant } from "components/Option/types";
import { useCallback } from "react";
import { QuizAnswer } from "../types";
import getTickerValueBasedOnIndex from "../utils/getTickerValue";

type Props = {
  answers: QuizAnswer[];
  onAnswerClick: (answerId: string) => void;
  currentAnswerId: string | null;
  correctAnswerId: string;
};

function AnswersOptions({
  answers,
  onAnswerClick,
  currentAnswerId,
  correctAnswerId,
}: Props) {
  const getState = useCallback(
    (answerId: string): OptionStateVariant => {
      const isSelected = currentAnswerId === answerId;
      if (!isSelected) {
        return "inactive";
      }
      if (isSelected && answerId === correctAnswerId) {
        return "correct";
      }
      if (isSelected && answerId !== correctAnswerId) {
        return "wrong";
      }
      if (isSelected) {
        return "selected";
      }
      return "inactive";
    },
    [currentAnswerId, correctAnswerId],
  );

  return (
    <div className="quiz-game-container-options">
      {answers.map((answer, index) => (
        <AnswerOption
          key={answer.id}
          ticker={getTickerValueBasedOnIndex(index)}
          text={answer.text}
          state={getState(answer.id)}
          onClick={() => onAnswerClick(answer.id)}
        />
      ))}
    </div>
  );
}

export default AnswersOptions;
