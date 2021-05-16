import {
  globalChecks,
  callFromIndex,
  endMethodCall,
  setUndefined,
} from './checks';
import { CompositeBuilderClassTestArgs } from './test-config-types';

export const testCompositeBuilderClass = (args: CompositeBuilderClassTestArgs): void => {
  const { methods, config } = args;

  describe(`${config.className} Object`, () => {
    globalChecks(config);
    callFromIndex(config);
    methods.forEach((method) => method(config));
    endMethodCall(config);
    setUndefined(config);
  });
};
