import { mapArgNotation } from '../mappers/index.js.js';

import type { ClassDataBase, ClassMethod } from '../getters/get-class-data-array';
import type { MethodData } from '../getters/get-method-data-array';

export default (classData: ClassDataBase, methods: MethodData[]): ClassMethod[] => {
  const rawClassMethods = methods
    .filter((method) => classData.mixins.includes(method.name));

  const methodsWithGenTypes = rawClassMethods.map((method) => {
    if (Boolean(method.arg) && method.arg.type === 'T') {
      const classDataGeneric = classData.withGenerics
        .find((generics) => generics.name === method.name);

      return Object.assign(method, { arg: { ...method.arg, type: classDataGeneric.type } });
    }

    return method;
  });

  return methodsWithGenTypes.map((method): ClassMethod => {
    const hasDefault = Boolean(method.arg) && Boolean(method.arg.default);
    const argNotation = mapArgNotation(method);

    return {
      name: method.method,
      type: method.type,
      description: `${method.description} ${hasDefault ? `Defaults to \`${method.arg.default}\`.` : ''}`,
      fullNotation: `${classData.name}.${method.method}(${argNotation});`,
      default: method.arg ? method.arg.default : null,
    };
  });
};
