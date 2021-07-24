import { CompositionObjectBase } from '../base';
import { Filter } from '../constants';

export interface FilterParams {
  filter?: Filter[];
  excludeBotUsers?: boolean;
  excludeExternalSharedChannels?: boolean;
}

export class FilterObject extends CompositionObjectBase {
  public include?: Filter[];

  public exclude_external_shared_channels?: boolean;

  public exclude_bot_users?: boolean;

  constructor(params: FilterParams) {
    super();

    this.include = params.filter;
    this.exclude_external_shared_channels = params.excludeExternalSharedChannels;
    this.exclude_bot_users = params.excludeBotUsers;
  }
}
