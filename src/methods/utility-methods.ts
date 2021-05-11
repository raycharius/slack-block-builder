/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */

import { Builder } from '../lib';

export abstract class End extends Builder {
  /**
   * @description Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public end(): this {
    return this;
  }
}
