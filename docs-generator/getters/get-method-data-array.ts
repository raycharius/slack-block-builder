import {
  getAllMatchesFromFile,
  getFilePathsFromFolder,
  getSingleMatchFromString,
} from '../parsers';
import { getArgObject } from '../helpers';
import { mapMethodType } from '../mappers';

export interface ArgObject {
  name: string;
  type: string;
  default: string | null;
  isArray: boolean;
  isRequired: boolean;
}

export interface MethodData {
  name: string;
  file: string;
  folder: string;
  fullPath: string;
  method: string;
  description: string;
  type: string;
  arg: ArgObject | null;
}

export default (): MethodData[] => {
  const basePath = './src';
  const folder = 'methods';

  return getFilePathsFromFolder(basePath, folder, ['index.ts', 'required-methods.ts'])
    .map((file) => {
      const fullPath = `${basePath}/${folder}/${file}`;

      return getAllMatchesFromFile(fullPath, /(?:export abstract class )([\s\S]*?\n})/g)
        .map((methodClass) => {
          const argString = getSingleMatchFromString(methodClass, /(?:.*public .*\()(.*)(?=\))/g);

          return {
            file,
            folder,
            fullPath,
            type: mapMethodType(file),
            description: getSingleMatchFromString(methodClass, /^.*(?:\* @description )(.*)/gm),
            name: getSingleMatchFromString(methodClass, /(?:export abstract class )(.*?)(?= extends Builder|<)/g),
            method: getSingleMatchFromString(methodClass, /(?:.*public )(.*?)(?=\()/g),
            arg: getArgObject(argString),
          };
        });
    })
    .flat();
};
