import useGetScreenSize from "hooks/useGetScreenSize";
import { memo } from "react";
import Option from "./Option";
import { OptionStateVariant } from "./types";

type Props = {
  state: OptionStateVariant;
  ticker: string;
  text: string;
  onClick: () => void;
};

function AnswerOption({ state, ticker, text, onClick }: Props) {
  const { isMobile } = useGetScreenSize();
  const size = isMobile
    ? { width: "270", height: "56" }
    : { width: "389", height: "72" };

  return (
    <div
      className="quiz-game-container-option"
      tabIndex={0}
      role="button"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onClick();
        }
      }}
    >
      <Option state={state} size={size}>
        <div className="component-option-content">
          <span className="component-option--ticker">{ticker}</span>
          <span className="component-option--text">{text}</span>
        </div>
      </Option>
    </div>
  );
}

export default memo(AnswerOption);
