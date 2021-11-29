import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const blockId = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.blockId,
    methodName: Prop.BlockId,
    propSetterPropName: Prop.BlockId,
    slackDtoParamName: SlackDto.mapParam(Prop.BlockId),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
