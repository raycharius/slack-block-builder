import { MethodTestArgs } from '../test-config-types';
import { Prop } from '../../src/internal/constants';

export const builtFilterProperty = (params: MethodTestArgs): void => {
  const {
    Class,
    methodName,
    propSetterPropName,
    slackDtoParamName,
    methodArgMock,
  } = params;

  test(`Building the object with a defined property of '${propSetterPropName}' should include the DTO property of '${slackDtoParamName}' only on the filter object.`, () => {
    const instance = new Class();

    instance[methodName](methodArgMock);

    const built = instance.build();

    expect(built).not.toHaveProperty(slackDtoParamName);
    expect(built[Prop.Filter]).toHaveProperty(slackDtoParamName);
    expect(built[Prop.Filter][slackDtoParamName]).toBeDefined();
  });
};
