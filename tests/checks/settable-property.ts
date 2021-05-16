import { MethodTestArgs } from '../test-config-types';

export const settableProperty = (params: MethodTestArgs): void => {
  const {
    Class,
    methodName,
    propSetterPropName,
    methodArgMock,
  } = params;

  test(`Passing a valid value to '${methodName}()' should set the property.`, () => {
    const instance = new Class();

    instance[methodName](methodArgMock);

    expect(instance.props[propSetterPropName]).toEqual(methodArgMock);
  });

  test(`Passing a valid value to method '${methodName}()' when the value has already been set should throw an error.`, () => {
    const instance = new Class();

    instance[methodName](methodArgMock);

    expect(() => instance[methodName](methodArgMock)).toThrow();
  });
};
