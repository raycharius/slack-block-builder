import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop, ButtonStyle } from '../../src/constants';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const primary = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodName: Prop.Primary,
    propSetterPropName: Prop.Style,
    slackDtoParamName: SlackDto.mapParam(Prop.Style),
    expectedEnumValue: ButtonStyle.Primary,
  };

  checks.configurableEnumValueProperty(config);
};
