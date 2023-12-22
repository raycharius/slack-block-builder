import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const maxFiles = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.maxFiles,
    methodName: Prop.MaxFiles,
    propSetterPropName: Prop.MaxFiles,
    slackDtoParamName: SlackDto.mapParam(Prop.MaxFiles),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
