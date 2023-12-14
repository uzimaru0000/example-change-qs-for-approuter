const stringToNumber = (str: string) => {
  return Array.from(str)
    .map((ch) => ch.charCodeAt(0))
    .reduce((a, b) => a + b);
};

export const str2hsl = (str: string) => {
  const num = stringToNumber(str);
  var colorAngle = num ** 2 % 360;

  return `hsl(${colorAngle}, 80%, 64%)`;
};
