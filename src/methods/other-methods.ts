/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */

import { Builder, SlackDto, BlockSlackDto } from '../lib';

export abstract class BuildToJSON extends Builder {
  /**
   * @description Builds the view and returns it as a Slack API-compatible JSON string.
   */

  public buildToJSON(): string {
    const result = this.build();

    return JSON.stringify(result);
  }
}

export abstract class BuildToObject<T> extends Builder {
  /**
   * @description Builds the view and returns it as a Slack API-compatible object.
   */

  public buildToObject(): T {
    return this.build();
  }
}

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

export abstract class GetAttachments extends Builder {
  /**
   * @description Builds the view and returns a Slack API-compatible array of attachments.
   *
   * {@link https://api.slack.com/reference/messaging/attachments|View in Slack API Documentation}
   */

  public getAttachments(): SlackDto[] {
    return this.build().attachments;
  }
}

export abstract class GetBlocks extends Builder {
  /**
   * @description Builds the view and returns a Slack API-compatible array of blocks.
   *
   * {@link https://api.slack.com/block-kit|View in Slack API Documentation}
   */

  public getBlocks(): BlockSlackDto[] {
    this.build();

    return this.build().blocks;
  }
}

export abstract class PrintPreviewUrl extends Builder {
  /**
   * @description When called, builds the view and prints to the console the preview URL in order to open and preview the view on Slack's Block Kit Builder web application.
   */

  public printPreviewUrl(): void {
    const result = this.build();

    const baseUri = 'https://app.slack.com/block-kit-builder/#';
    const stringifiedBlocks = this.props.type
      ? JSON.stringify(result)
      : JSON.stringify({ blocks: result.blocks, attachments: result.attachments });

    // eslint-disable-next-line no-console
    console.log(encodeURI(`${baseUri}${stringifiedBlocks}`).replace(/[!'()*]/g, escape));
  }
}
