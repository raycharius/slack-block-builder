import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const authorName = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.authorName,
    methodName: Prop.AuthorName,
    propSetterPropName: Prop.AuthorName,
    slackDtoParamName: SlackDto.mapParam(Prop.AuthorName),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
