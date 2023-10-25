import OptionIcon from "assets/images/svgComponents/OptionIcon";
import { orange100 } from "design-system/tokens.module";
import { ReactNode, useState } from "react";
import getThemeBasedOnState from "./helpers/getThemeForOption";
import { OptionStateVariant } from "./types";

type Props = {
  state: OptionStateVariant;
  children: ReactNode;
  size: { width: string; height: string };
  disableHover?: boolean;
};

function Option({ state, children, size, disableHover }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const theme = getThemeBasedOnState(state);

  const color = isHovered ? orange100 : theme.color;

  return (
    <div
      className="component-option"
      onMouseEnter={disableHover ? undefined : () => setIsHovered(true)}
      onMouseLeave={disableHover ? undefined : () => setIsHovered(false)}
    >
      {children}
      <OptionIcon
        color={color}
        backgroundColor={theme.backgroundColor}
        width={size.width}
        height={size.height}
      />
    </div>
  );
}

export default Option;

Option.defaultProps = {
  disableHover: false,
};
