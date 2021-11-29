import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const privateMetaData = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.privateMetaData,
    methodName: Prop.PrivateMetaData,
    propSetterPropName: Prop.PrivateMetaData,
    slackDtoParamName: SlackDto.mapParam(Prop.PrivateMetaData),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
