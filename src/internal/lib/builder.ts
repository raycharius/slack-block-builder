import { BlockBuilderError } from '../exception';

import type { ObjectLiteral, Ctor } from '../types';

export abstract class Builder {
  protected readonly props: ObjectLiteral;

  constructor(params?: ObjectLiteral) {
    this.props = params ? { ...params } : {};

    Object.keys(this.props)
      .forEach((prop) => this.props[prop] === undefined
        && delete this.props[prop]);

    Object.seal(this);
  }

  protected set(value: unknown, prop: string): this {
    if (this.props[prop] !== undefined) {
      throw new BlockBuilderError(`Property ${prop} can only be assigned once.`);
    }

    if (value !== undefined) {
      this.props[prop] = value;
    }

    return this;
  }

  protected append(value: unknown[], prop: string): this {
    const prunedValue = Builder.pruneUndefinedFromArray(value);

    if (prunedValue.length > 0) {
      this.props[prop] = this.props[prop] === undefined
        ? prunedValue
        : this.props[prop].concat(prunedValue);
    }

    return this;
  }

  protected getResult<T>(Clazz: Ctor<T>, overrideProps?: ObjectLiteral): Readonly<T> {
    const result = new Clazz({ ...this.props, ...overrideProps });

    return Object.freeze(result);
  }

  /** @internal */

  // eslint-disable-next-line max-len
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
  public build(params?: ObjectLiteral): any {
    throw new BlockBuilderError('Builder must have a declared \'build\' method');
  }

  public static pruneUndefinedFromArray<T>(array: T[]): T[] {
    return array.filter((value) => (value !== undefined ? value : false));
  }
}
