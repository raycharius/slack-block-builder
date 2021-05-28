import { getSingleMatchFromString } from '../parsers';
import { mapType } from '../mappers';

import type { ArgObject } from '../getters/get-method-data-array';

// TODO: Need to refactor this entire file! It smells like a big pile of poo and will break.

export default (argString: string): ArgObject | null => {
  if (argString.length === 0) return null;

  const spacelessString = argString.replace(/\s/g, '');
  const hasDefault = spacelessString.includes('=');
  const hasTypeDef = spacelessString.includes(':');
  const name = spacelessString.split(':')[0];
  const type = hasTypeDef // eslint-disable-line no-nested-ternary
    ? spacelessString
      .split(':')[1]
      .split('=')[0]
    : hasDefault ? name.split('=')[0] : 'boolean';
  const isArray = name.startsWith('...');

  const arrayedType = isArray
    ? getSingleMatchFromString(type, /(?:Appendable<)(.*)(?=>)/g)
    : null;

  return {
    name,
    isArray,
    type: mapType(isArray ? arrayedType : type),
    default: hasDefault
      ? spacelessString.split('=')[1]
      : null,
    isRequired: !hasDefault,
  };
};
