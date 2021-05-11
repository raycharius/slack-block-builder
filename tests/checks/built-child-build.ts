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

  test(`Building the object with a set property of '${propSetterPropName}' build '${propSetterPropName}' or each item inside of it`, () => {
    const instance = new Class();

    instance[methodName](methodArgMock);

    const built = instance.build({ raw: true }); // Add raw for surfaces

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
