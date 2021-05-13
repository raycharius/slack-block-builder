import { readdirSync } from 'fs';
import { getSingleMatchFromFile } from '../parsers';

interface ClassData {
  file: string;
  folder: string;
  fullPath: string;
  name: string;
  displayName: string;
  slackLink: string;
  functionName: string;
  githubLink: string;
  blockBuilderLink: string;
  category: string;
  mixins: string[],
  params: { name: string, type: string }[],
}

export default (): ClassData[] => {
  const basePath = './src';
  const folders = ['surfaces', 'blocks', 'elements', 'bits'];

  return folders.map((folder) => readdirSync(`${basePath}/${folder}`)
    .filter((file) => !(file === 'index.ts'))
    .map((file) => {
      const fullPath = `${basePath}/${folder.toLowerCase()}/${file}`;
      const name = getSingleMatchFromFile(fullPath, /^.*(?:export class\s)(.*)(?=\sextends)/gm);
      const functionName = name.replace('Builder', '');

      return {
        file,
        folder,
        fullPath,
        name,
        functionName,
        githubLink: `https://github.com/raycharius/slack-block-builder/tree/main/src/${folder}/${file}`,
        blockBuilderLink: `https://www.blockbuilder.dev/#/${folder}/${file.replace('.ts', '')}`,
        displayName: getSingleMatchFromFile(fullPath, /^.*(?:\* @@displayName )(.*)/gm),
        slackLink: getSingleMatchFromFile(fullPath, /^.*(?:\* @@link )(.*)/gm),
        category: `${folder.charAt(0).toUpperCase()}${folder.slice(1)}`,
        mixins: getSingleMatchFromFile(fullPath, /(?:applyMixins.*, \[)([\s\S]*?)(?=,[\s\S]])/g)
          .replace(/\r?\n|\r|\s/g, '')
          .split(','),
        params: getSingleMatchFromFile(fullPath, new RegExp(`(?:export interface ${functionName}Params {)([\\s\\S]*?)(?=;[\\s\\S]})`, 'g'))
          .replace(/\r?\n|\r|\s/g, '')
          .split(';')
          .map((paramString) => ({
            name: paramString.split('?:')[0],
            type: paramString.split('?:')[1],
          })),
      };
    }))
    .flat();
};
