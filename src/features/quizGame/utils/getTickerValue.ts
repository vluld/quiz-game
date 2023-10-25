const getTickerValueBasedOnIndex = (index: number): string => {
  if (index < 26) {
    return String.fromCharCode(65 + index);
  }

  return `${getTickerValueBasedOnIndex(index % 26)}${Math.floor(index / 26)}`;
};

export default getTickerValueBasedOnIndex;
