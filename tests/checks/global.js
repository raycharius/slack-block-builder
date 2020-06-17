const { ClassPropValidators } = require('../../src/utility/lib');

module.exports = ({ Class, Dto, classProps }) => {
  test('Initializing should return a sealed instance of class', () => {
    const instance = new Class();

    instance.test = true;

    expect(instance).toBeInstanceOf(Class);
    expect(instance).toMatchObject({ props: {} });
    expect(instance).toMatchObject({ result: {} });
    expect(instance).toMatchObject({ hasBeenBuilt: false });
    expect(instance.test).toBeFalsy();
  });

  test('Initializing with params in the constructor should return a sealed instance of class with set props', () => {
    const instance = new Class(classProps);

    instance.test = true;

    expect(instance).toMatchObject({ props: classProps });
    expect(instance).toMatchObject({ result: {} });
    expect(instance).toMatchObject({ hasBeenBuilt: false });
    expect(instance.test).toBeFalsy();
  });

  test('Calling \'build()\' will build the object and return the correct DTO', () => {
    const instance = new Class(classProps);
    const built = instance.build();

    expect(() => mock.text('test')).toThrow(); // Check that props can no longer be set
    expect(instance.hasBeenBuilt).toBeTruthy();
    expect(instance.result).toBeInstanceOf(Dto);
    expect(built).toBeInstanceOf(Dto);
  });

  test('Calling \'build()\' when the object has already been built will throw an error', () => {
    const instance = new Class(classProps);
    const built = instance.build();

    if (instance.category === 'Surface') {
      expect(instance.build()).toBeInstanceOf(Dto);
      expect(instance.build()).toMatchObject(instance.result);

    } else {
      expect(() => instance.build()).toThrow();
    }
  });
};