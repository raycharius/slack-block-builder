import { BlockBuilderError } from './error';

interface PropSetterProps {
  [key: string]: any;
}

export interface PropSetterParams {
  [key: string]: any;
}

export abstract class PropSetter {
  protected props: PropSetterProps;

  protected canBeModified: boolean;

  protected constructor(params?: PropSetterParams) {
    this.props = params || {} as PropSetterProps;
    this.canBeModified = true;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  protected set(value: any, prop: string): this {
    this.checkCanBeModified();

    if (this.props[prop] !== undefined) {
      throw new BlockBuilderError(`Property ${prop} can only be assigned once.`);
    }

    this.props[prop] = value;

    return this;
  }

  protected append(value: any[], prop: string): this {
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
