import { UtilityObjectBase } from '../base';
import { DispatchOnType } from '../constants';

export type DispatchActionsConfigParams = DispatchOnType[];

export class DispatchActionsConfigurationObject extends UtilityObjectBase {
  public trigger_actions_on: DispatchOnType[];

  constructor(params: DispatchActionsConfigParams) {
    super();

    this.trigger_actions_on = params;
  }
}
