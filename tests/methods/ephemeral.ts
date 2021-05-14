import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { ResponseType } from '../../src/constants/response-types';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const ephemeral = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodName: Prop.Ephemeral,
    propSetterPropName: Prop.ResponseType,
    slackDtoParamName: SlackDto.mapParam(Prop.ResponseType),
    expectedEnumValue: ResponseType.Ephemeral,
  };

  checks.configurableEnumValueProperty(config);
};
