import useGetScreenSize from "hooks/useGetScreenSize";
import Option from "./Option";
import { OptionStateVariant, OptionTextState } from "./types";

type Props = {
  state: OptionStateVariant;
  text: string;
  textState: OptionTextState;
};

function StepOption({ state, text, textState }: Props) {
  const { isMobile } = useGetScreenSize();
  const size = isMobile
    ? { width: "240", height: "32" }
    : { width: "240", height: "40" };

  const getStylesForStepText = (stepState: OptionTextState) => {
    switch (stepState) {
      case "active":
        return "component-option--stepText component-option--stepText-active";
      case "inactive":
        return "component-option--stepText component-option--stepText-inactive";

      default:
        return "component-option--stepText";
    }
  };

  return (
    <div className="quiz-game-container-step">
      <Option state={state} size={size} disableHover>
        <div className="component-option-content component-option-content-step">
          <p className={getStylesForStepText(textState)}>{text}</p>
        </div>
      </Option>
    </div>
  );
}

export default StepOption;
