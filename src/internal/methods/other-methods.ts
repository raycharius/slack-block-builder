/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */

import { Builder } from '../lib';
import { SlackDto, SlackBlockDto } from '../dto';

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

  public buildToObject(): Readonly<T> {
    return this.build();
  }
}

export abstract class End extends Builder {
  /**
   * @description Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
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
   * {@link https://docs.slack.dev/reference/messaging/attachments|View in Slack API Documentation}
   */

  public getAttachments(): Readonly<SlackDto>[] {
    return this.build().attachments;
  }
}

export abstract class GetBlocks extends Builder {
  /**
   * @description Builds the view and returns a Slack API-compatible array of blocks.
   *
   * {@link https://docs.slack.dev/reference/block-kit|View in Slack API Documentation}
   */

  public getBlocks(): Readonly<SlackBlockDto>[] {
    this.build();

    return this.build().blocks;
  }
}

export abstract class GetPreviewUrl extends Builder {
  /**
   * @description Builds the view and returns the preview URL in order to open and preview the view on Slack's Block Kit Builder web application.
   */

  public getPreviewUrl(): string {
    const result = this.build();

    const baseUri = 'https://app.slack.com/block-kit-builder/#';
    const stringifiedBlocks = result.type
      ? JSON.stringify(result)
      : JSON.stringify({ blocks: result.blocks, attachments: result.attachments });

    return encodeURI(`${baseUri}${stringifiedBlocks}`).replace(/[!'()*]/g, escape);
  }
}

export abstract class PrintPreviewUrl extends GetPreviewUrl {
  /**
   * @description Calls getPreviewUrl to build the preview URL and log it to the console.
   */

  public printPreviewUrl(): void {
    // eslint-disable-next-line no-console
    console.log(this.getPreviewUrl());
  }
}
