import { MethodTestArgs } from '../test-config-types';

export const literalBuild = (params: MethodTestArgs): void => {
  const {
    Class,
    methodName,
    propSetterPropName,
    slackDtoParamName,
    methodArgMock,
  } = params;

  test(`Building the object with a set property of '${propSetterPropName}' should its literal value`, () => {
    const instance = new Class();

    instance[methodName](methodArgMock);

    const built = instance.build();

    expect(built[slackDtoParamName]).toEqual(methodArgMock);
    expect(built[slackDtoParamName]).toEqual(instance.props[propSetterPropName]);
  });
};
