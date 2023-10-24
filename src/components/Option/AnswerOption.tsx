import useGetScreenSize from "hooks/useGetScreenSize";
import Option from "./Option";
import { OptionStateVariant } from "./types";

type Props = {
  state: OptionStateVariant;
  ticker: string;
  text: string;
};

function AnswerOption({ state, ticker, text }: Props) {
  const { isMobile } = useGetScreenSize();
  const size = isMobile
    ? { width: "270", height: "56" }
    : { width: "389", height: "72" };

  return (
    <Option state={state} size={size}>
      <div className="component-option-content">
        <span className="component-option--ticker">{ticker}</span>
        <span className="component-option--text">{text}</span>
      </div>
    </Option>
  );
}

export default AnswerOption;
