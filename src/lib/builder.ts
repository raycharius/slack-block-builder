import { PropSetter } from './prop-setter';
import { BlockBuilderError } from './error';

import type { ObjectLiteral, Constructor } from '../types';

export abstract class Builder extends PropSetter {
  public isBuilt: boolean;

  public result: any;

  protected constructor(params?: ObjectLiteral) {
    super(params);

    this.isBuilt = false;
    this.result = {};

    this.finalizeConstruction();
  }

  protected getResult<Type>(
    ClassToBuild: Constructor<Type>, augmentedProps?: ObjectLiteral,
  ): Type {
    if (!this.isBuilt) {
      this.result = new ClassToBuild({ ...this.props, ...augmentedProps });
      this.isBuilt = true;
      this.canBeModified = false;
    }

    return this.result;
  }

  protected finalizeConstruction(): void {
    Object.keys(this.props)
      .forEach((prop) => this.props[prop] === undefined
        && delete this.props[prop]);

    Object.seal(this);
  }

  public canBeBuilt(): boolean {
    return !this.isBuilt;
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  public build(params?: ObjectLiteral): ObjectLiteral {
    throw new BlockBuilderError('Builder must have a declared \'build\' method');
  }
}
