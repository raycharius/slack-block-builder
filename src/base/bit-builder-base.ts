import { Builder } from '../lib';

export abstract class BitBuilderBase<CtorParams> extends Builder {
  constructor(params: CtorParams) {
    super(params);
  }
}
