import { Builder } from '../lib';

export abstract class SurfaceBuilderBase<CtorParams> extends Builder {
  constructor(params: CtorParams) {
    super(params);
  }
}
