import * as colors from "design-system/tokens.module";
import { OptionStateVariant } from "../types";

const getThemeBasedOnState = (optionState?: OptionStateVariant) => {
  switch (optionState) {
    case "inactive":
      return {
        color: colors.black40,
        backgroundColor: colors.white,
      };
    case "correct":
      return {
        color: colors.green100,
        backgroundColor: colors.green5,
      };
    case "wrong":
      return {
        color: colors.red100,
        backgroundColor: colors.red5,
      };
    case "selected":
      return {
        color: colors.orange100,
        backgroundColor: colors.orange5,
      };
    default:
      return {
        color: colors.black40,
        backgroundColor: colors.white,
      };
  }
};

export default getThemeBasedOnState;
