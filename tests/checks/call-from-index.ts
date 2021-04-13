import * as index from '../../src';
import { CompositeBuilderClassConfig } from '../test-config-types';

export const callFromIndex = (config: CompositeBuilderClassConfig): void => {
  const {
    Class,
    className,
    params,
    category,
  } = config;

  test(`Calling the ${className} object from the src/index.js file should return an instance of the object`, () => {
    const instance = index[className] ? index[className]() : index[category][className]();

    expect(instance).toBeInstanceOf(Class);
  });

  test(`Calling the ${className} object from the src/index.js with parameters should return an instance of the object with props`, () => {
    const instance = index[className]
      ? index[className](params)
      : index[category][className](params);

    expect(instance).toBeInstanceOf(Class);
    expect(instance).toMatchObject({ props: params });
  });
};
