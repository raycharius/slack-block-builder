export default (string: string, regEx: RegExp): boolean => {
  const match = regEx.exec(string);

  return Boolean(match) && match[1] !== '';
};
