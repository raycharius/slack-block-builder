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
      instance.result[propSetterPropName].forEach((value, i) => {
        expect(instance.result[propSetterPropName][i]).toBeInstanceOf(mutatedValueType);
        expect(built[slackDtoParamName][i]).toEqual(instance.result[propSetterPropName][i]);
      });

      return;
    }

    expect(instance.result[propSetterPropName]).toBeInstanceOf(mutatedValueType);
    expect(built[slackDtoParamName]).toEqual(instance.result[propSetterPropName]);
  });
};
