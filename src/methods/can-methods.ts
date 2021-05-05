/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */

import { Builder, SlackDto } from '../lib';

export abstract class CanBuildToJSON extends Builder {
  /**
   * @description Builds the view and returns it as a Slack API-compatible JSON string.
   */

  public buildToJSON(): string {
    this.build();

    return JSON.stringify(this.result);
  }
}

export abstract class CanBuildToObject extends Builder {
  /**
   * @description Builds the view and returns it as a Slack API-compatible object.
   */

  public buildToObject(): SlackDto {
    this.build();

    return this.result;
  }
}

export abstract class CanGetAttachments extends Builder {
  /**
   * @description Builds the view and returns a Slack API-compatible array of attachments.
   *
   * {@link https://api.slack.com/reference/messaging/attachments|View in Slack API Documentation}
   */

  getAttachments(): any[] | void {
    this.build();

    return this.result.attachments;
  }
}

export abstract class CanGetBlocks extends Builder {
  /**
   * @description Builds the view and returns a Slack API-compatible array of blocks.
   *
   * {@link https://api.slack.com/block-kit|View in Slack API Documentation}
   */

  public getBlocks(): any[] | void {
    this.build();

    return this.result.blocks;
  }
}

export abstract class CanPrintPreviewUrl extends Builder {
  /**
   * @description When called, builds the view and prints to the console the preview URL in order to open and preview the view on Slack's Block Kit Builder web application.
   */

  public printPreviewUrl(): void {
    this.build();

    const baseUri = 'https://app.slack.com/block-kit-builder/#';
    const stringifiedBlocks = this.props.type
      ? JSON.stringify(this.result)
      : JSON.stringify({ blocks: this.result.blocks, attachments: this.result.attachments });

    // eslint-disable-next-line no-console
    console.log(encodeURI(`${baseUri}${stringifiedBlocks}`).replace(/[!'()*]/g, escape));
  }
}
