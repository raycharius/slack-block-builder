import { CompositeBuilderClassConfig } from '../test-config-types';

export const globalChecks = (config: CompositeBuilderClassConfig): void => {
  const {
    Class, DtoClass, params, className,
  } = config;

  test(`Initializing a '${className}' object should return a sealed instance of class`, () => {
    const instance = new Class();

    // eslint-disable-next-line no-return-assign
    expect(() => instance.test = true).toThrow();
    expect(instance).toBeInstanceOf(Class);
    expect(instance).toMatchObject({ props: {} });
    expect(instance.test).toBeFalsy();
  });

  test(`Initializing a '${className}' object with params in the constructor should return a sealed instance of class with set props.`, () => {
    const instance = new Class(params);

    // eslint-disable-next-line no-return-assign
    expect(() => instance.test = true).toThrow();
    expect(instance).toMatchObject({ props: params });
    expect(instance.test).toBeFalsy();
  });

  test(`Calling 'build()' on a '${className}' object will build the object and return the correct DTO.`, () => {
    const instance = new Class(params);
    const built = instance.build();

    expect(() => instance.text('test')).toThrow(); // Check that props can no longer be set on builder
    expect(built).toBeInstanceOf(DtoClass);
  });

  test(`Calling 'build()' on a '${className}' object will product an immutable object.`, () => {
    const instance = new Class(params);
    const built = instance.build();

    expect(() => {
      built.hello = 'goodbye';
    }).toThrow(); // Check that props can no longer be set on result
    expect(built).toBeInstanceOf(DtoClass);
  });

  test(`Calling 'build()' on a '${className}' object when it has already been built will not modify the resulting object.`, () => {
    const instanceOne = new Class(params);
    const instanceTwo = new Class(params);

    instanceOne.build();
    instanceTwo.build();

    expect(instanceOne.build()).toBeInstanceOf(DtoClass);
    expect(instanceOne.build()).toMatchObject(instanceTwo.build());
  });
};
