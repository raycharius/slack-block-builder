import { mapArgNotation } from '../mappers/index.js';

import type { ClassData } from './get-class-data-array';
import type { MethodData } from './get-method-data-array';

export interface ClassMethodArg {
  notation: string;
  default: string | null;
}

type PartialMethodData = 'method' | 'type' | 'description';

export interface ClassMethod extends Pick<MethodData, PartialMethodData> {
  arg: ClassMethodArg | null;
}

export interface DocTemplateClassData extends ClassData {
  methods: ClassMethod[];
}

export default (
  classData: ClassData[], methodData: MethodData[],
): DocTemplateClassData[] => classData.map((clazz): DocTemplateClassData => {
  const includedMethods = methodData
    .filter((method) => clazz.mixins.includes(method.name));
  const methodsWithGenTypes = includedMethods.map((method) => {
    if (Boolean(method.arg) && method.arg.type === 'T') {
      const clazzGeneric = clazz.withGenerics
        .find((generics) => generics.name === method.name);

      return Object.assign(method, { arg: { ...method.arg, type: clazzGeneric.type } });
    }

    return method;
  });

  const classMethods = methodsWithGenTypes.map((method): ClassMethod => ({
    method: method.method,
    type: method.type,
    description: method.description,
    arg: {
      notation: mapArgNotation(method),
      default: method.arg ? method.arg.default : null,
    },
  }));

  return Object.assign(clazz, { methods: classMethods });
});

/*

classes.forEach((class) => {
  object.methods = methods.forEach((method) => {

  })
}

 */

/*
{
  file: 'append-methods.ts',
  folder: 'methods',
  fullPath: './src/methods/append-methods.ts',
  type: 'Append',
  description: 'Adds attachments to your message.',
  name: 'Attachments',
  method: 'attachments',
  arg: {
    name: '...attachments',
    isArray: true,
    type: 'Attachment',
    default: null,
    isRequired: true
  }
}

 */

/*
{
  file: 'option.ts',
  folder: 'bits',
  fullPath: './src/bits/option.ts',
  name: 'OptionBuilder',
  functionName: 'Option',
  githubLink: 'https://github.com/raycharius/slack-block-builder/tree/main/src/bits/option.ts',
  blockBuilderLink: 'https://www.blockbuilder.dev/#/bits/option',
  displayName: 'Option',
  slackLink: 'https://api.slack.com/reference/block-kit/composition-objects#option',
  category: 'Bits',
  mixins: [ 'Description', 'End', 'Text', 'Url', 'Value' ],
  params: [ [Object], [Object], [Object], [Object] ],
  withGenerics: null
}
 */
