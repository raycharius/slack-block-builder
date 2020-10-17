const { ObjectBase } = require('./base');

class DispatchActionsConfigurationObject extends ObjectBase {
  constructor(params) {
    super();

    this.trigger_actions_on = params.triggerActionsOn;

    this.cleanAndFreeze();
  }
}

module.exports = DispatchActionsConfigurationObject;
