import { readFileSync } from 'fs';

export default (path: string, regEx: RegExp, strict = true): string[] => {
  const file = readFileSync(path, { encoding: 'utf8', flag: 'r' });
  const result = file.match(regEx);

  if (strict && !result) {
    throw new Error(`Could not find a string matching '${regEx.toString()}' in '${path}.'`);
  }

  return result || null;
};
