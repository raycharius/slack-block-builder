import { MethodTestArgs } from '../test-config-types';

export const mutatedToNumber = (params: MethodTestArgs): void => {
  const {
    Class,
    className,
    methodName,
    propSetterPropName,
    slackDtoParamName,
    methodArgMock,
  } = params;

  test(`Building a '${className}' object with a set property of '${propSetterPropName}' should mutate the value to a number.`, () => {
    const instance = new Class();

    instance[methodName](methodArgMock);

    const built = instance.build();

    expect(typeof built[slackDtoParamName]).toEqual('number');
  });
};
