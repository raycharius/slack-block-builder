import { CompositeBuilderClassConfig } from '../test-config-types';

export const endMethodCall = (config: CompositeBuilderClassConfig): void => {
  const { Class, params, category } = config;

  test('Calling the \'end()\' method should return the instance of the object without any manipulations.', () => {
    if (category === 'Surfaces') {
      return;
    }

    const instanceOne = new Class(params);
    const instanceTwo = new Class(params);

    expect(instanceOne.end()).toEqual(instanceTwo);
  });
};
