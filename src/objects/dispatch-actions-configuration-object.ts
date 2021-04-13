import { UtilityObjectBase } from '../base';

export type DispatchActionsConfigParams = string[];

export class DispatchActionsConfigurationObject extends UtilityObjectBase {
  public trigger_actions_on: string[];

  constructor(params: DispatchActionsConfigParams) {
    super();

    this.trigger_actions_on = params;
  }
}
