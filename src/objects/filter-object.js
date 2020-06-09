const { ObjectBase } = require('./base');

class FilterObject extends ObjectBase {
  constructor(params) {
    super();

    this.include = params.filter;
    this.exclude_external_shared_channels = params.excludeExternalSharedChannels;
    this.exclude_bot_users = params.excludeBotUsers;

    this.cleanAndFreeze();
  }
}

module.exports = FilterObject;
