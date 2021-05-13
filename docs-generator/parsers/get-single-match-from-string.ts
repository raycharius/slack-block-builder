export default (string: string, regEx: RegExp, strict = true): string => {
  const match = regEx.exec(string);

  if (strict && !match) {
    throw new Error(`Could not find a string matching '${regEx.toString()}' in this string.`);
  }

  return match ? match[1] : null;
};
