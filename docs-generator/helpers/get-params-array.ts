import { mapType } from '../mappers';

import type { ParamsObject } from '../getters/get-class-data-array';

export default (paramsString: string): ParamsObject[] | null => {
  if (paramsString.length === 0) return null;

  const result = paramsString.replace(/\r?\n|\r|\s/g, '')
    .split(';')
    .map((item) => {
      const [name, type] = item.split('?:');

      return { name, type: mapType(type, true) };
    });

  return result.length > 0 ? result : null;
};
