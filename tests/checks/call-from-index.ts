import * as index from '../../src';
import { CompositeBuilderClassConfig } from '../test-config-types';

export const callFromIndex = (config: CompositeBuilderClassConfig): void => {
  const {
    Class,
    className,
    params,
    category,
  } = config;

  const functionName = className.replace('Builder', '');

  test(`Calling the function to create a '${className}' object from the src/index.ts file should return an instance of the object.`, () => {
    const instance = index[functionName] ? index[functionName]() : index[category][functionName]();

    expect(instance).toBeInstanceOf(Class);
  });

  test(`Calling the function to create a '${className}' object from the src/index.ts file with params should return an instance of the object with defined parameters.`, () => {
    const instance = index[functionName]
      ? index[functionName](params)
      : index[category][functionName](params);

    expect(instance).toBeInstanceOf(Class);
    expect(instance).toMatchObject({ props: params });
  });
};
