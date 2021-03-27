const { AdvancedSurface } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class WorkflowStepDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.surfaces.workflowStep;
    this.blocks = params.blocks;
    this.private_metadata = params.privateMetaData;
    this.callback_id = params.callbackId;
    this.submit_disabled = params.submitDisabled;

    this.pruneAndFreeze();
  }
}

class WorkflowStep extends AdvancedSurface {
  constructor(params = {}) {
    super();

    this.props.privateMetaData = params.privateMetaData;
    this.props.callbackId = params.callbackId;

    this.finalizeConstruction();
  }

  /**
   * Configures the WorkflowStep to have a disabled Submit button until the
   * user has completed one or more inputs.
   *
   * {@link https://api.slack.com/reference/workflows/configuration-view|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  submitDisabled() {
    return this.set(true, props.submitDisabled);
  }

  /**
   * @private
   */

  build() {
    if (!this.hasBeenBuilt) {
      const augmentedProps = {
        title: BuilderHelper.getPlainTextObject(this.props.title),
        blocks: BuilderHelper.getBuilderResults(this.props.blocks),
        close: BuilderHelper.getPlainTextObject(this.props.close),
        submit: BuilderHelper.getPlainTextObject(this.props.submit),
      };

      this.getResult(WorkflowStepDto, augmentedProps);
    }

    return this.result;
  }
}

module.exports = {
  WorkflowStep,
  WorkflowStepDto,
};
