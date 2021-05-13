import { mapType } from '../mappers/index.js';

import type { WithGenericsObject } from '../getters/get-class-data-array';

export default (withGenericString: string): WithGenericsObject[] | null => {
  if (withGenericString.length === 0) return null;

  const result = withGenericString.replace(/\r?\n|\r|\s/g, '')
    .split(',')
    .filter((item) => item.includes('<'))
    .map((item) => {
      const [name, type] = item.split('<');

      return { name, type: mapType(type.replace('>', '')) };
    });

  return result.length > 0 ? result : null;
};
