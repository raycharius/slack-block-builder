import { Builder } from '../lib';

export abstract class BlockBuilderBase<CtorParams> extends Builder {
  constructor(params: CtorParams) {
    super(params);
  }
}
