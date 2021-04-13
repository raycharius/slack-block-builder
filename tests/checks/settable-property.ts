import { MethodTestArgs } from '../test-config-types';

export const settableProperty = (params: MethodTestArgs): void => {
  const {
    Class,
    methodName,
    propSetterPropName,
    methodArgMock,
  } = params;

  test(`Passing a valid value to '${methodName}()' should set the property`, () => {
    const instance = new Class();

    instance[methodName](methodArgMock);

    expect(instance.props[propSetterPropName]).toEqual(methodArgMock);
  });

  test(`Passing an value to method '${methodName}()' when value is already set should throw an error`, () => {
    const instance = new Class();

    instance[methodName](methodArgMock);

    expect(() => instance[methodName](methodArgMock)).toThrow();
  });
};
