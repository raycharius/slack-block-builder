import { SurfaceBase } from '../base';
import { SlackDto } from '../lib';
import {
  CanBuildToJSON,
  CanBuildToObject,
  CanGetAttachments,
  CanGetBlocks,
  CanPrintPreviewUrlForMessage,
  HasAsUser,
  HasAttachments,
  HasBlocks,
  HasChannel,
  HasDeleteOriginal,
  HasEphemeral,
  HasIgnoreMarkdown,
  HasInChannel,
  HasPostAt,
  HasReplaceOriginal,
  HasText,
  HasThreadTs,
  HasTs,
  MustBuild,
} from '../methods';
import { applyMixins, getBuilderResults } from '../helpers';

export interface MessageParams {
  channel?: string;
  postAt?: number;
  text?: string;
  threadTs?: string;
  ts?: string;
}

export interface MessageSurface extends CanBuildToJSON,
  CanBuildToObject,
  CanGetAttachments,
  CanGetBlocks,
  CanPrintPreviewUrlForMessage,
  HasAsUser,
  HasAttachments,
  HasBlocks,
  HasChannel,
  HasDeleteOriginal,
  HasEphemeral,
  HasIgnoreMarkdown,
  HasInChannel,
  HasPostAt,
  HasReplaceOriginal,
  HasText,
  HasThreadTs,
  HasTs,
  MustBuild {
}

/**
 * {@link }
 */

export class MessageSurface extends SurfaceBase implements MessageSurface {
  constructor(params?: MessageParams) {
    super(params);
  }

  public build(): SlackDto {
    const augmentedProps = {
      blocks: getBuilderResults(this.props.blocks),
      attachments: getBuilderResults(this.props.attachments),
    };

    return this.getResult(SlackDto, augmentedProps);
  }
}

applyMixins(MessageSurface, [
  CanBuildToJSON,
  CanBuildToObject,
  CanGetAttachments,
  CanGetBlocks,
  CanPrintPreviewUrlForMessage,
  HasAsUser,
  HasAttachments,
  HasBlocks,
  HasChannel,
  HasDeleteOriginal,
  HasEphemeral,
  HasIgnoreMarkdown,
  HasInChannel,
  HasPostAt,
  HasReplaceOriginal,
  HasText,
  HasThreadTs,
  HasTs,
]);
