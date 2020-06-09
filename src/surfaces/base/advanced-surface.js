const Surface = require('./surface');
const { props } = require('../../utility/constants');

class AdvancedSurface extends Surface {

  /**
   * Sets a string sent back to your server together with all action and submission events.
   *
   * **Slack Validation Rules:**
   *    * Max 3000 characters
   *
   * {@link https://api.slack.com/reference/surfaces/views|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  privateMetaData(string) {
    return this.set(string, props.privateMetaData);
  }

  /**
   * Sets a string sent back to your server together with all action and submission events to
   * identify app actions for the current view.
   *
   * **Slack Validation Rules:**
   *    * Max 255 characters
   *
   * {@link https://api.slack.com/reference/surfaces/views|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  callbackId(string) {
    return this.set(string, props.callbackId);
  }

  /**
   * Sets a custom identifier that must be unique for all views on a per-team basis
   *
   * **Slack Validation Rules:**
   *    * Max 255 characters
   *
   * {@link https://api.slack.com/reference/surfaces/views|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  externalId(string) {
    return this.set(string, props.externalId);
  }

  /**
   * When called, builds the view and prints to the console the preview URL in
   * order to open and preview the view on the Slack Block Builder website
   */

  printPreviewUrl() {
    this.build();

    console.log(encodeURI(`https://app.slack.com/block-kit-builder/#${JSON.stringify(this.result)}`).replace(/[!'()*]/g, escape));
  }
}

module.exports = AdvancedSurface;
