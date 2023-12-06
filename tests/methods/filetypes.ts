import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const filetypes = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.filetypes,
    methodName: Prop.Filetypes,
    propSetterPropName: Prop.Filetypes,
    slackDtoParamName: SlackDto.mapParam(Prop.Filetypes),
    expectArray: true,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
