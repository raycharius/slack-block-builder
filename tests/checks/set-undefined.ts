import { CompositeBuilderClassConfig } from '../test-config-types';

export const setUndefined = (config: CompositeBuilderClassConfig): void => {
  const { Class, className, params } = config;

  test(`Passing a value of 'undefined' to a builder method on a '${className}' object should not set the prop.`, () => {
    const instance = new Class();
    const method = Object.keys(params)[0];

    instance[method]();

    expect(instance.props[method]).toBeUndefined();
    expect(instance.props).toEqual({});
  });
};
