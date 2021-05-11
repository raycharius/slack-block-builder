import { MethodTestArgs } from '../test-config-types';

export const boolFalseProperty = (params: MethodTestArgs): void => {
  const {
    Class,
    methodName,
    propSetterPropName,
  } = params;

  test(`Calling '${methodName}()' should set the '${propSetterPropName}' property to 'false'.`, () => {
    const instance = new Class();

    instance[methodName]();

    expect(instance.props[propSetterPropName]).toEqual(false);
  });
};
