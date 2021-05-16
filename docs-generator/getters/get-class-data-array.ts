import { getFilePathsFromFolder, getSingleMatchFromFile } from '../parsers';
import { getParamArray, getWithGenericsArray, getClassMethodsArray } from '../helpers';
import { MethodData } from './get-method-data-array';

export interface ParamsObject {
  name: string; // 'title'
  type: string; // 'String'
}

export interface WithGenericsObject {
  name: string; // 'Confirm'
  type: string; // 'ConfirmationDialog'
}

export interface ClassMethod {
  name: string; // 'blocks'
  type: string; // 'Setter'
  description: string; // 'Does something to the ModalBuilder object...'
  fullNotation: string; // 'ModalBuilder.blocks([Block1[, ...[, BlockN]])'
  default: string | null; // 'true'
}

export interface ClassDataBase {
  folder: string; // 'surfaces'
  file: string; // 'modal.ts'
  fullPath: string; // './src/surfaces/modal.ts'
  name: string; // 'ModalBuilder'
  displayName: string; // 'Modal'
  functionName: string; // 'Modal'
  slackLink: string; // 'https://api.slack.com/block-kit/${uri}'
  githubLink: string; // 'https://github.com/raycharius/slack-block-builder/${uri}'
  blockBuilderLink: string; // 'https://blockbuilder.dev/${uri}'
  category: string; // 'Surfaces'
  mixins: string[], // ['Blocks', 'BuildToObject', ...]
  params: ParamsObject[] | null,
  withGenerics: WithGenericsObject[] | null,
}

export interface ClassData extends ClassDataBase {
  methods: ClassMethod[],
  setterMethods: ClassMethod[],
  otherMethods: ClassMethod[],
}

export default (methodData: MethodData[]): ClassData[] => {
  const basePath = './src';
  const folders = ['surfaces', 'blocks', 'elements', 'bits'];

  return folders.map((folder) => getFilePathsFromFolder(basePath, folder, ['index.ts'])
    .map((file) => {
      const fullPath = `${basePath}/${folder.toLowerCase()}/${file}`;
      const name = getSingleMatchFromFile(fullPath, /^.*(?:export class\s)([^\s]+)/gm);
      const functionName = name.replace('Builder', '');
      const paramsString = getSingleMatchFromFile(fullPath, new RegExp(`(?:export interface ${functionName}Params {)([\\s\\S]*?)(?=;[\\s\\S]})`, 'g'));
      const withGenericsString = getSingleMatchFromFile(fullPath, new RegExp(`(?:export interface ${name} extends )([\\s\\S]*?)(?=[\\s\\S]{)`, 'g'), false);
      const classDataBase: ClassDataBase = {
        folder,
        file,
        fullPath,
        name,
        functionName,
        displayName: getSingleMatchFromFile(fullPath, /^.*(?:\* @@displayName )(.*)/gm),
        slackLink: getSingleMatchFromFile(fullPath, /^.*(?:\* @@link )(.*)/gm),
        githubLink: `https://github.com/raycharius/slack-block-builder/tree/main/src/${folder}/${file}`,
        blockBuilderLink: `https://www.blockbuilder.dev/#/${folder}/${file.replace('.ts', '')}`,
        category: `${folder.charAt(0).toUpperCase()}${folder.slice(1)}`,
        mixins: getSingleMatchFromFile(fullPath, /(?:applyMixins.*, \[)([\s\S]*?)(?=,[\s\S]])/g)
          .replace(/\r?\n|\r|\s/g, '')
          .split(','),
        params: getParamArray(paramsString),
        withGenerics: getWithGenericsArray(withGenericsString),
      };
      const methods = getClassMethodsArray(classDataBase, methodData);

      return {
        ...classDataBase,
        methods,
        setterMethods: methods.filter((method) => method.type !== 'Other'),
        otherMethods: methods.filter((method) => method.type === 'Other'),
      };
    }))
    .flat();
};
