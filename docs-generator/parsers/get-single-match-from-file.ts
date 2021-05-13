import { readFileSync } from 'fs';

export default (path: string, regEx: RegExp): string => {
  const file = readFileSync(path, { encoding: 'utf8', flag: 'r' });
  const match = regEx.exec(file);

  if (!match) {
    throw new Error(`Could not find a string matching '${regEx.toString()}' in '${path}.'`);
  }

  return match[1];
};
