import { MethodTestArgs } from '../test-config-types';
import { Prop } from '../../src/internal/constants';

export const builtTriggerProperty = (params: MethodTestArgs): void => {
  const {
    Class,
    methodName,
    propSetterPropName,
    slackDtoParamName,
    methodArgMock,
  } = params;

  test(`Building the object with a defined property of '${propSetterPropName}' should include the DTO property of '${slackDtoParamName}' only on the trigger object.`, () => {
    const instance = new Class();

    instance[methodName](methodArgMock);

    const built = instance.build();

    expect(built).toHaveProperty(slackDtoParamName);
    expect(built[Prop.Trigger]).toHaveProperty('url');
    expect(built[Prop.Trigger]).toHaveProperty('customizable_input_parameters');
    expect(built[Prop.Trigger].url).toBeDefined();

    built[Prop.Trigger].customizable_input_parameters.forEach((param) => {
      expect(param).toHaveProperty('name');
      expect(param).toHaveProperty('value');
    });
  });
};
