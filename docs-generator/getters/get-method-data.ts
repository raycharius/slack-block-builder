import { readdirSync } from 'fs';
import { getAllMatchesFromFile } from '../parsers';

interface MethodData {
  file: string;
  folder: string;
  fullPath: string;
  methodClass: string;
}

export default (): MethodData[] => {
  const basePath = './src';
  const folder = 'methods';

  return readdirSync(`${basePath}/${folder}`)
    .filter((file) => !(file === 'index.ts' || file === 'must-methods.ts'))
    .map((file) => {
      const fullPath = `${basePath}/${folder}/${file}`;

      return getAllMatchesFromFile(fullPath, /(?:export abstract class )([\s\S]*?\n})/g)
        .map((methodClass) => ({
          file,
          folder,
          fullPath,
          methodClass,
        }));
    })
    .flat();
};
