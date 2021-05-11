import { CompositeBuilderClassConfig } from '../test-config-types';

export const globalChecks = (config: CompositeBuilderClassConfig): void => {
  const { Class, DtoClass, params } = config;

  test('Initializing should return a sealed instance of class', () => {
    const instance = new Class();

    // eslint-disable-next-line no-return-assign
    expect(() => instance.test = true).toThrow();
    expect(instance).toBeInstanceOf(Class);
    expect(instance).toMatchObject({ props: {} });
    expect(instance.test).toBeFalsy();
  });

  test('Initializing with params in the constructor should return a sealed instance of class with set props', () => {
    const instance = new Class(params);

    // eslint-disable-next-line no-return-assign
    expect(() => instance.test = true).toThrow();
    expect(instance).toMatchObject({ props: params });
    expect(instance.test).toBeFalsy();
  });

  test('Calling \'build()\' will build the object and return the correct DTO', () => {
    const instance = new Class(params);
    const built = instance.build();

    expect(() => instance.text('test')).toThrow(); // Check that props can no longer be set
    expect(built).toBeInstanceOf(DtoClass);
  });

  test('Calling \'build()\' when the object has already been built will not modify the resulting object', () => {
    const instanceOne = new Class(params);
    const instanceTwo = new Class(params);

    instanceOne.build();
    instanceTwo.build();

    expect(instanceOne.build()).toBeInstanceOf(DtoClass);
    expect(instanceOne.build()).toMatchObject(instanceTwo.build());
  });
};
