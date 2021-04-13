import { MethodTestArgs } from '../test-config-types';

export const boolTrueProperty = (params: MethodTestArgs): void => {
  const {
    Class,
    methodName,
    propSetterPropName,
  } = params;

  test(`Calling '${methodName}()' should set the '${propSetterPropName}' property to 'true'`, () => {
    const instance = new Class();

    instance[methodName]();

    expect(instance.props[propSetterPropName]).toEqual(true);
  });
};
