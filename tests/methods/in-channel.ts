import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { ResponseType } from '../../src/constants/response-types';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const inChannel = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodName: Prop.InChannel,
    propSetterPropName: Prop.ResponseType,
    slackDtoParamName: SlackDto.mapParam(Prop.ResponseType),
    expectedEnumValue: ResponseType.InChannel,
  };

  checks.configurableEnumValueProperty(config);
};
