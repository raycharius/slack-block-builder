import { CompositeBuilderClassConfig } from '../test-config-types';

export const setUndefined = (config: CompositeBuilderClassConfig): void => {
  const { Class, params } = config;

  test('Passing an value of \'undefined\' a builder method should set as \'undefined\'', () => {
    const instance = new Class();
    const method = Object.keys(params)[0];

    instance[method]();

    expect(instance.props[method]).toBeUndefined();
  });
};
