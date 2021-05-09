import { Builder } from '../lib';

export abstract class BitBuilder<CtorParams> extends Builder {
  constructor(params: CtorParams) {
    super(params);
  }
}
