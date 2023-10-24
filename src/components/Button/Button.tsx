type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

function Button({ onClick, children }: Props) {
  return (
    <button type="button" onClick={onClick} className="component-button">
      {children}
    </button>
  );
}

export default Button;
