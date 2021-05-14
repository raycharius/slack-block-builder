import { Builder } from '../lib';

export abstract class ElementBuilderBase<CtorParams> extends Builder {
  constructor(params: CtorParams) {
    super(params);
  }
}
