import { ElementBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialChannels,
  HasMaxSelectedItems,
  HasPlaceholder,
  MustBuild,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../helpers';
import { objectTypes } from '../constants';

export interface ChannelMultiSelectParams {
  actionId?: string;
  maxSelectedItems?: number;
  placeholder?: string;
}

export interface ChannelMultiSelectElement extends HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialChannels,
  HasMaxSelectedItems,
  HasPlaceholder,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/block-elements#channel_multi_select}
 */

export class ChannelMultiSelectElement extends ElementBase implements ChannelMultiSelectElement {
  constructor(params?: ChannelMultiSelectParams) {
    super(params);

    this.props.type = objectTypes.elements.channelsMultiSelect;
  }

  public build(): SlackDto {
    const augmentedProps = {
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult(this.props.confirm),
    };

    return this.getResult(SlackDto, augmentedProps);
  }
}

applyMixins(ChannelMultiSelectElement, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialChannels,
  HasMaxSelectedItems,
  HasPlaceholder,
]);
