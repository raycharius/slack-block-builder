import { Builder } from '../lib';

export abstract class SurfaceBuilder<CtorParams> extends Builder {
  constructor(params: CtorParams) {
    super(params);
  }
}
