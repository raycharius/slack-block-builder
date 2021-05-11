import { MethodTestArgs } from '../test-config-types';

export const configurableEnumValueProperty = (params: MethodTestArgs): void => {
  const {
    Class,
    expectedBuiltValue,
    expectedEnumValue,
    methodName,
    propSetterPropName,
    slackDtoParamName,
  } = params;

  test(`Calling '${methodName}()' without an argument will result in the enum value being set.`, () => {
    const instance = new Class();

    instance[methodName]();

    expect(instance.props[propSetterPropName]).toEqual(expectedEnumValue);
  });

  test(`Passing a value of 'true' to '${methodName}()' will result in the enum value being set`, () => {
    const instance = new Class();

    instance[methodName](true);

    expect(instance.props[propSetterPropName]).toEqual(expectedEnumValue);
  });

  test(`Passing a value of 'false' to '${methodName}()' will result in the enum value not being set`, () => {
    const instance = new Class();

    instance[methodName](false);

    expect(instance.props[propSetterPropName]).toBeUndefined();
  });

  test(`Building the object after '${methodName}()' has been called without an argument, '${propSetterPropName}' should match the enum value`, () => {
    const instance = new Class();

    instance[methodName]();

    const built = instance.build();

    if (expectedBuiltValue) {
      expect(built[slackDtoParamName]).toEqual(expectedBuiltValue);
    } else {
      expect(built[slackDtoParamName]).toEqual(expectedEnumValue);
      expect(built[slackDtoParamName]).toEqual(instance.props[propSetterPropName]);
    }
  });
};
