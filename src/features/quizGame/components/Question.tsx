import { memo } from "react";

type Props = {
  text: string;
};

function Question({ text }: Props) {
  return (
    <div className="quiz-game-container-questions">
      <p className="quiz-game-container-question">{text}</p>
    </div>
  );
}

export default memo(Question);
