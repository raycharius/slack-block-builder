/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { SurfaceType, BlockType, ElementType } from '../constants';

import type { ObjectLiteral } from '../types';
import type { PlainTextObject } from '../objects';

export enum Param {
  actionId = 'action_id',
  blocks = 'blocks',
  blockId = 'block_id',
  maxSelectedItems = 'max_selected_items',
  title = 'title',
  text = 'text',
  confirm = 'confirm',
  deny = 'deny',
  style = 'style',
  danger = 'danger',
  label = 'label',
  options = 'options',
  value = 'value',
  description = 'description',
  url = 'url',
  elements = 'elements',
  externalId = 'external_id',
  imageUrl = 'image_url',
  altText = 'alt_text',
  element = 'element',
  hint = 'hint',
  optional = 'optional',
  fields = 'fields',
  accessory = 'accessory',
  initialChannels = 'initial_channels',
  initialChannel = 'initial_channel',
  responseUrlEnabled = 'response_url_enabled',
  initialOptions = 'initial_options',
  initialConversations = 'initial_conversations',
  defaultToCurrentConversation = 'default_to_current_conversation',
  filter = 'filter',
  initialConversation = 'initial_conversation',
  initialDate = 'initial_date',
  initialDateTime = 'initial_date_time',
  isDecimalAllowed = 'is_decimal_allowed',
  minQueryLength = 'min_query_length',
  initialOption = 'initial_option',
  optionGroups = 'option_groups',
  placeholder = 'placeholder',
  initialValue = 'initial_value',
  multiline = 'multiline',
  minLength = 'min_length',
  maxLength = 'max_length',
  initialUsers = 'initial_users',
  initialUser = 'initial_user',
  channel = 'channel',
  close = 'close',
  submit = 'submit',
  clearOnClose = 'clear_on_close',
  notifyOnClose = 'notify_on_close',
  privateMetaData = 'private_metadata',
  callbackId = 'callback_id',
  asUser = 'as_user',
  ts = 'ts',
  threadTs = 'thread_ts',
  replaceOriginal = 'replace_original',
  deleteOriginal = 'delete_original',
  responseType = 'response_type',
  postAt = 'post_at',
  color = 'color',
  fallback = 'fallback',
  attachments = 'attachments',
  dispatchAction = 'dispatch_action',
  dispatchActionConfig = 'dispatch_action_config',
  initialTime = 'initial_time',
  mrkdwn = 'mrkdwn',
  submitDisabled = 'submit_disabled',
  type = 'type',
  focusOnLoad = 'focus_on_load',
  accessibilityLabel = 'accessibility_label',
  authorName = 'author_name',
  providerIconUrl = 'provider_icon_url',
  providerName = 'provider_name',
  titleUrl = 'title_url',
  thumbnailUrl = 'thumbnail_url',
  videoUrl = 'video_url',
  minValue = 'min_value',
  maxValue = 'max_value',
  maxFiles = 'max_files',
  filetypes = 'filetypes',
  source = 'source',
  rows = 'rows',
  columnSettings = 'column_settings',
  border = 'border',
  indent = 'indent',
  name = 'name',
  unicode = 'unicode',
  unsafe = 'unsafe',
  format = 'format',
  range = 'range',
  teamId = 'team_id',
  userId = 'user_id',
  usergroupId = 'usergroup_id',
  channelId = 'channel_id',
  timestamp = 'timestamp',
}

export class SlackDto implements ObjectLiteral {
  constructor(params: ObjectLiteral) {
    Object.keys(params).forEach((paramName) => {
      const mappedParam = SlackDto.mapParam(paramName);

      if (params[paramName] !== undefined && mappedParam !== undefined) {
        // @ts-ignore -- Dynamically created class
        this[mappedParam] = params[paramName];
      }
    });
  }

  public static mapParam(param: string): string {
    // @ts-ignore -- Dynamically created class
    return Param[param];
  }
}

export class SlackMessageDto extends SlackDto {
  // @ts-ignore -- Dynamically created class
  public readonly text: string;

  // @ts-ignore -- Dynamically created class
  public readonly channel: string;

  // @ts-ignore -- Dynamically created class
  public readonly ts: string;

  public readonly blocks?: SlackBlockDto[];

  public readonly attachments?: SlackDto[];
}

export class SlackHomeTabDto extends SlackDto {
  public readonly type = SurfaceType.HomeTab;

  // @ts-ignore -- Dynamically created class
  public readonly blocks: SlackBlockDto[];
}

export class SlackModalDto extends SlackDto {
  public readonly type = SurfaceType.Modal;

  // @ts-ignore -- Dynamically created class
  public readonly title: PlainTextObject;

  // @ts-ignore -- Dynamically created class
  public readonly blocks: SlackBlockDto[];
}

export class SlackWorkflowStepDto extends SlackDto {
  public readonly type = SurfaceType.WorkflowStep;

  // @ts-ignore -- Dynamically created class
  public readonly blocks: SlackBlockDto[];
}

export type SlackViewDto = SlackModalDto | SlackWorkflowStepDto | SlackHomeTabDto;

export class SlackBlockDto extends SlackDto {
  // @ts-ignore -- Dynamically created class
  public readonly type: BlockType;
}

export class SlackElementDto extends SlackDto {
  // @ts-ignore -- Dynamically created class
  public readonly type: ElementType;
}
