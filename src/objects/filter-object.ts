import { UtilityObjectBase } from '../base';

export interface FilterParams {
  filter?: string[];
  excludeBotUsers?: boolean;
  excludeExternalSharedChannels?: boolean;
}

export class FilterObject extends UtilityObjectBase {
  public include: string[];

  public exclude_external_shared_channels: boolean;

  public exclude_bot_users: boolean;

  constructor(params: FilterParams) {
    super();

    this.include = params.filter;
    this.exclude_external_shared_channels = params.excludeExternalSharedChannels;
    this.exclude_bot_users = params.excludeBotUsers;
  }
}
