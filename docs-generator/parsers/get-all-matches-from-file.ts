import { readFileSync } from 'fs';

export default (path: string, regEx: RegExp): string[] => {
  const file = readFileSync(path, { encoding: 'utf8', flag: 'r' });
  const result = file.match(regEx);

  if (result.length === 0) {
    throw new Error(`Could not find a string matching '${regEx.toString()}' in '${path}.'`);
  }

  return result;
};
