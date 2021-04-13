import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { FilterObject } from '../../src/objects';
import * as checks from '../checks';

export const filter = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.filter,
    methodName: props.filter,
    propSetterPropName: props.filter,
    slackDtoParamName: paramMap.filter,
    mutatedValueType: FilterObject,
  };

  checks.appendableProperty(config);
  checks.mutatedBuild(config);
};
