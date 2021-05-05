import { MethodTestArgs } from '../test-config-types';

export const mutatedBuild = (params: MethodTestArgs): void => {
  const {
    Class,
    methodName,
    propSetterPropName,
    slackDtoParamName,
    methodArgMock,
    mutatedValueType,
    expectArray,
  } = params;

  test(`Building the object with a set property of '${propSetterPropName}' should return a mutated value`, () => {
    const instance = new Class();

    instance[methodName](methodArgMock);

    const built = instance.build();

    if (expectArray) {
      instance.result[slackDtoParamName].forEach((value, i) => {
        expect(instance.result[slackDtoParamName][i]).toBeInstanceOf(mutatedValueType);
        expect(built[slackDtoParamName][i]).toEqual(instance.result[slackDtoParamName][i]);
      });

      return;
    }

    expect(instance.result[slackDtoParamName]).toBeInstanceOf(mutatedValueType);
    expect(built[slackDtoParamName]).toEqual(instance.result[slackDtoParamName]);
  });
};
