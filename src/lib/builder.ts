import { BlockBuilderError } from './error';

import type { ObjectLiteral, Ctor } from '../types';
import type { Prop } from '../constants';

export abstract class Builder {
  protected readonly props: ObjectLiteral;

  constructor(params?: ObjectLiteral) {
    this.props = params || {};

    Object.keys(this.props)
      .forEach((prop) => this.props[prop] === undefined
        && delete this.props[prop]);
    Object.seal(this);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  protected set(value: any, prop: string): this {
    if (this.props[prop] !== undefined) {
      throw new BlockBuilderError(`Property ${prop} can only be assigned once.`);
    }

    if (value !== undefined) {
      this.props[prop] = value;
    }

    return this;
  }

  protected append(value: any[], prop: Prop): this {
    const prunedValue = value.filter(Boolean);

    if (prunedValue.length > 0) {
      this.props[prop] = this.props[prop] === undefined
        ? prunedValue
        : this.props[prop].concat(prunedValue);
    }

    return this;
  }

  protected getResult<T>(Clazz: Ctor<T>, overrideProps?: ObjectLiteral): T {
    return new Clazz({ ...this.props, ...overrideProps });
  }

  /** @internal */

  // eslint-disable-next-line max-len
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-module-boundary-types
  public build(params?: ObjectLiteral): any {
    throw new BlockBuilderError('Builder must have a declared \'build\' method');
  }
}
