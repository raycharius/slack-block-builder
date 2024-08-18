import { CompositionObjectBase } from '../base';
import type { ObjectLiteral } from '../types';

export interface TriggerParams {
  url: string;
  customizableInputParameters?: ObjectLiteral;
}

export class TriggerObject extends CompositionObjectBase {
  public url: string;

  public customizableInputParameters?: ObjectLiteral;

  constructor(params: TriggerParams) {
    super();

    this.url = params.url;
    this.customizableInputParameters = params.customizableInputParameters;
  }
}
