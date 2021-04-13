import { CompositeBuilderClassConfig } from '../test-config-types';

export const endMethodCall = (config: CompositeBuilderClassConfig): void => {
  const { Class, params, category } = config;

  test('Calling the \'end()\' method should return the instance of the object.', () => {
    if (category === 'Surfaces') {
      return;
    }

    const instance = new Class(params);

    expect(instance.end()).toEqual(instance);
  });
};
