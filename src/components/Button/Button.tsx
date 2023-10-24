type ButtonVariants = "desktop" | "mobile";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  variant?: ButtonVariants;
};

const getClassNameBasedOnVariant = (variant: ButtonVariants) => {
  switch (variant) {
    case "desktop":
      return "component-button component-button--desktop";
    case "mobile":
      return "component-button component-button--mobile";
    default:
      return "component-button component-button--desktop";
  }
};

function Button({ onClick, children, variant = "desktop" }: Props) {
  const variantClassName = getClassNameBasedOnVariant(variant);
  return (
    <button type="button" onClick={onClick} className={`${variantClassName}`}>
      {children}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  variant: "desktop",
};
