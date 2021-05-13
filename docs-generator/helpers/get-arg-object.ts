import { getSingleMatchFromString } from '../parsers';
import { mapType } from '../mappers/index.js';

import type { ArgObject } from '../getters/get-method-data-array';

export default (argString: string): ArgObject | null => {
  if (argString.length === 0) return null;

  const spacelessString = argString.replace(/\s/g, '');
  const [name, rest] = spacelessString.split(':');
  const isArray = name.startsWith('...');
  const hasDefault = rest.includes('=');
  const type = isArray
    ? getSingleMatchFromString(rest.split('=')[0], /(?:Array<OneOrArray<)(.*)(?=>>)/g)
    : rest.split('=')[0];

  return {
    name,
    isArray,
    type: mapType(type),
    default: hasDefault
      ? spacelessString.split('=')[1]
      : null,
    isRequired: !hasDefault,
  };
};
