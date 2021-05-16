import type { MethodData } from '../getters/get-method-data-array';

const getArrayNotation = (type: string): string => `[${type}1[, ...[, ${type}N]]`;

const getOptionalNotation = (type: string): string => `${type}?`;

export default (method: MethodData): string => {
  if (!method.arg) return '';

  const { isArray, isRequired, type } = method.arg;

  if (isArray) return getArrayNotation(type);

  if (!isRequired) return getOptionalNotation(type);

  return type;
};
