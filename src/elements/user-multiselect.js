const { MultiSelectElement } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class UserMultiSelectDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.elements.multiselect.users;
    this.placeholder = params.placeholder;
    this.action_id = params.actionId;
    this.initial_users = params.initialUsers;
    this.confirm = params.confirm;
    this.max_selected_items = params.maxSelectedItems;

    this.pruneAndFreeze();
  }
}

class UserMultiSelect extends MultiSelectElement {
  constructor(params = {}) {
    super();

    this.props.placeholder = params.placeholder;
    this.props.actionId = params.actionId;
    this.props.maxSelectedItems = params.maxSelectedItems;

    this.finalizeConstruction();
  }

  /**
   * Sets users to display in the menu by default at load
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#users_multi_select|View in Slack API Documentation}
   *
   * @param {...string|Array<string>} strings Accepts multiple arguments or Array
   * @return {this} The instance on which the method is called
   */

  initialUsers(...strings) {
    return this.append(strings.flat(), props.initialUsers);
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      placeholder: BuilderHelper.getPlainTextObject(this.props.placeholder),
      confirm: BuilderHelper.getBuilderResult(this.props.confirm),
    };

    return this.getResult(UserMultiSelectDto, augmentedProps);
  }
}

module.exports = {
  UserMultiSelect,
  UserMultiSelectDto,
};
