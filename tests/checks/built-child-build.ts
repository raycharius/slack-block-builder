import { MethodTestArgs } from '../test-config-types';

export const builtChildBuild = (params: MethodTestArgs): void => {
  const {
    Class,
    methodName,
    propSetterPropName,
    slackDtoParamName,
    methodArgMock,
    expectArray,
  } = params;

  test(`Building the object with a defined property of '${propSetterPropName}' should set a DTO property of '${slackDtoParamName}' on the built object.`, () => {
    const instance = new Class();

    instance[methodName](methodArgMock);

    const built = instance.build();

    expect(built).toHaveProperty(slackDtoParamName);

    if (expectArray) {
      built[slackDtoParamName].forEach((value, i) => {
        expect(built[slackDtoParamName][i]).toBeDefined();
      });

      return;
    }

    expect(built[slackDtoParamName]).toBeDefined();
  });
};
