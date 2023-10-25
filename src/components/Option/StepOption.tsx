import useGetScreenSize from "hooks/useGetScreenSize";
import Option from "./Option";
import { OptionStateVariant } from "./types";

type Props = {
  state: OptionStateVariant;
  text: string;
};

function StepOption({ state, text }: Props) {
  const { isMobile } = useGetScreenSize();
  const size = isMobile
    ? { width: "240", height: "32" }
    : { width: "240", height: "40" };

  return (
    <div className="quiz-game-container-step">
      <Option state={state} size={size} disableHover>
        <div className="component-option-content component-option-content-step">
          <p className="component-option--stepText">{text}</p>
        </div>
      </Option>
    </div>
  );
}

export default StepOption;
