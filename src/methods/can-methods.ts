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

export abstract class GetAttachments extends Builder {
  /**
   * @description Builds the view and returns a Slack API-compatible array of attachments.
   *
   * {@link https://api.slack.com/reference/messaging/attachments|View in Slack API Documentation}
   */

  getAttachments(): SlackDto[] {
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
