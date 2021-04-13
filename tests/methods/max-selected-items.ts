import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const maxSelectedItems = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.maxSelectedItems,
    methodName: props.maxSelectedItems,
    propSetterPropName: props.maxSelectedItems,
    slackDtoParamName: paramMap.maxSelectedItems,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
