import { getFilePathsFromFolder, getSingleMatchFromFile } from '../parsers';
import { getParamArray, getWithGenericsArray } from '../helpers';

export interface ParamsObject {
  name: string;
  type: string;
}

export interface WithGenericsObject {
  name: string;
  type: string;
}

export interface ClassData {
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
  params: ParamsObject[] | null,
  withGenerics: WithGenericsObject[] | null,
}

export default (): ClassData[] => {
  const basePath = './src';
  const folders = ['surfaces', 'blocks', 'elements', 'bits'];

  return folders.map((folder) => getFilePathsFromFolder(basePath, folder, ['index.ts'])
    .map((file) => {
      const fullPath = `${basePath}/${folder.toLowerCase()}/${file}`;
      const name = getSingleMatchFromFile(fullPath, /^.*(?:export class\s)(.*)(?=\sextends)/gm);
      const functionName = name.replace('Builder', '');
      const paramsString = getSingleMatchFromFile(fullPath, new RegExp(`(?:export interface ${functionName}Params {)([\\s\\S]*?)(?=;[\\s\\S]})`, 'g'));
      const withGenericsString = getSingleMatchFromFile(fullPath, new RegExp(`(?:export interface ${name} extends )([\\s\\S]*?)(?=[\\s\\S]{)`, 'g'), false);

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
        params: getParamArray(paramsString),
        withGenerics: getWithGenericsArray(withGenericsString),
      };
    }))
    .flat();
};
