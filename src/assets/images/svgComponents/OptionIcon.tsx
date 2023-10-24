type Props = {
  color: string;
  backgroundColor: string;
  width: string;
  height: string;
};

function OptionIcon({ color, backgroundColor, width, height }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 390 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.8825 5.08639C26.055 2.19863 29.4585 0.5 33.0722 0.5H356.928C360.542 0.5 363.945 2.19863 366.118 5.08639L389.374 36L366.118 66.9136C363.945 69.8014 360.541 71.5 356.928 71.5H33.0722C29.4585 71.5 26.055 69.8014 23.8825 66.9136L0.625694 36L23.8825 5.08639Z"
        fill={backgroundColor}
        stroke={color}
      />
    </svg>
  );
}

export default OptionIcon;
