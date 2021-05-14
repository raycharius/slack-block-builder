import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { FilterObject } from '../../src/objects';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const filter = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.filter,
    methodName: Prop.Filter,
    propSetterPropName: Prop.Filter,
    slackDtoParamName: SlackDto.mapParam(Prop.Filter),
    mutatedValueType: FilterObject,
  };

  checks.appendableProperty(config);
  checks.mutatedBuild(config);
};
