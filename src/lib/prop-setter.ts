import { BlockBuilderError } from './error';

import type { ObjectLiteral } from '../types';
import type { Prop } from '../constants';

export abstract class PropSetter<CtorParams> {
  protected props: ObjectLiteral;

  protected canBeModified: boolean;

  constructor(params?: CtorParams) {
    this.props = params || {};
    this.canBeModified = true;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  protected set(value: any, prop: Prop): this {
    this.checkCanBeModified();

    if (this.props[prop] !== undefined) {
      throw new BlockBuilderError(`Property ${prop} can only be assigned once.`);
    }

    this.props[prop] = value;

    return this;
  }

  protected append(value: any[], prop: Prop): this {
    this.checkCanBeModified();

    const prunedValue = value.filter(Boolean);

    if (prunedValue.length > 0) {
      this.props[prop] = this.props[prop] === undefined
        ? prunedValue
        : this.props[prop].concat(prunedValue);
    }

    return this;
  }

  protected checkCanBeModified(): void {
    if (!this.canBeModified) {
      throw new BlockBuilderError('This object can no longer be modified.');
    }
  }
}
