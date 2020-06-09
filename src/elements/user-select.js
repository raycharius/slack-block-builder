const { SelectElement } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class UserSelectDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.elements.select.users;
    this.placeholder = params.placeholder;
    this.action_id = params.actionId;
    this.initial_user = params.initialUser;
    this.confirm = params.confirm;

    this.pruneAndFreeze();
  }
}

class UserSelect extends SelectElement {
  constructor(params = {}) {
    super();

    this.props.placeholder = params.placeholder;
    this.props.actionId = params.actionId;
    this.props.initialUser = params.initialUser;

    this.finalizeConstruction();
  }

  /**
   * Sets user to display in the menu by default at load
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#users_select|View in Slack API Documentation}
   *
   * @param {string} string User IDs
   * @return {this} The instance on which the method is called
   */

  initialUser(string) {
    return this.set(string, props.initialUser);
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      placeholder: BuilderHelper.getPlainTextObject(this.props.placeholder),
      confirm: BuilderHelper.getBuilderResult(this.props.confirm),
    };

    return this.getResult(UserSelectDto, augmentedProps);
  }
}

module.exports = {
  UserSelect,
  UserSelectDto,
};
