import { MethodTestArgs } from '../test-config-types';

export const mutatedBuild = (params: MethodTestArgs): void => {
  const {
    Class,
    className,
    methodName,
    propSetterPropName,
    slackDtoParamName,
    methodArgMock,
    mutatedValueType,
    expectArray,
  } = params;

  test(`Building a '${className}' object with a set property of '${propSetterPropName}' should set a mutated value.`, () => {
    const instance = new Class();

    instance[methodName](methodArgMock);

    const built = instance.build();

    if (expectArray) {
      built[slackDtoParamName].forEach((value, i) => {
        expect(built[slackDtoParamName][i]).toBeInstanceOf(mutatedValueType);
      });

      return;
    }

    expect(built[slackDtoParamName]).toBeInstanceOf(mutatedValueType);
  });
};
