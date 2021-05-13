import { readFileSync } from 'fs';

export default (path: string, regEx: RegExp, strict = true): string => {
  const file = readFileSync(path, { encoding: 'utf8', flag: 'r' });
  const match = regEx.exec(file);

  if (strict && !match) {
    throw new Error(`Could not find a string matching '${regEx.toString()}' in '${path}.'`);
  }

  return match ? match[1] : null;
};
