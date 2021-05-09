import { Builder } from '../lib';

export abstract class BlockBuilder<CtorParams> extends Builder {
  constructor(params: CtorParams) {
    super(params);
  }
}
