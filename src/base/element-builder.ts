import { Builder } from '../lib';

export abstract class ElementBuilder<CtorParams> extends Builder {
  constructor(params: CtorParams) {
    super(params);
  }
}
