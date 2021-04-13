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
      instance.result[slackDtoParamName].forEach((value, i) => {
        expect(instance.props[propSetterPropName][i].isBuilt).toEqual(true);
        expect(built[slackDtoParamName][i]).toEqual(instance.result[slackDtoParamName][i]);
      });

      return;
    }

    expect(instance.props[propSetterPropName].isBuilt).toEqual(true);
    expect(built[slackDtoParamName]).toEqual(instance.result[slackDtoParamName]);
  });
};
