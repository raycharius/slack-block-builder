import { readdirSync } from 'fs';

export default (basePath: string, folder: string, excludedFiles: string[]): string[] => readdirSync(`${basePath}/${folder}`)
  .filter((file) => !excludedFiles.includes(file));
