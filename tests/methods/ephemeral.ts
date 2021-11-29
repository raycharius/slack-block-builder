import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop, ResponseType } from '../../src/internal/constants';
import { SlackDto } from '../../src/internal';
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
