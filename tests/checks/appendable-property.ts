import { MethodTestArgs } from '../test-config-types';

export const appendableProperty = (params: MethodTestArgs): void => {
  const {
    Class,
    methodName,
    propSetterPropName,
    methodArgMock,
  } = params;
  const instance = new Class();

  test(`Passing a valid value '${methodName}()' should set the property`, () => {
    instance[methodName](methodArgMock);

    expect(instance.props[methodName]).toEqual(methodArgMock);
  });

  test(`Passing a consecutive value to method '${methodName}' should append the value to the property`, () => {
    instance[methodName](methodArgMock);

    expect(instance.props[propSetterPropName]).toEqual([...methodArgMock, ...methodArgMock]);
  });

  test(`Passing a consecutive value to method '${methodName}' should append the value to the property`, () => {
    instance[methodName](undefined);

    expect(instance.props[propSetterPropName]).toEqual([...methodArgMock, ...methodArgMock]);
  });
};
