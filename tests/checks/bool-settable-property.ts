import { MethodTestArgs } from '../test-config-types';

export const boolSettableProperty = (params: MethodTestArgs): void => {
  const {
    Class,
    methodName,
    propSetterPropName,
  } = params;

  test(`Calling '${methodName}()', passing in a value of 'false' should set the '${propSetterPropName}' property to 'false'.`, () => {
    const instance = new Class();

    instance[methodName](false);

    expect(instance.props[propSetterPropName]).toEqual(false);
  });

  test(`Calling '${methodName}()', passing in a value of 'true' should set the '${propSetterPropName}' property to 'true'`, () => {
    const instance = new Class();

    instance[methodName](true);

    expect(instance.props[propSetterPropName]).toEqual(true);
  });
};
