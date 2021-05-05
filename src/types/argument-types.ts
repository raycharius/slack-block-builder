// Elements

import type { ButtonElement } from '../elements/button';
import type { ChannelMultiSelectElement } from '../elements/channel-multi-select';
import type { ChannelSelectElement } from '../elements/channel-select';
import type { CheckboxesElement } from '../elements/checkboxes';
import type { ConversationMultiSelectElement } from '../elements/conversation-multi-select';
import type { ConversationSelectElement } from '../elements/conversation-select';
import type { DatePickerElement } from '../elements/datepicker';
import type { ExternalMultiSelectElement } from '../elements/external-multi-select';
import type { ExternalSelectElement } from '../elements/external-select';
import type { ImgElement } from '../elements/img';
import type { OverflowMenuElement } from '../elements/overflow-menu';
import type { RadioButtonsElement } from '../elements/radio-buttons';
import type { StaticMultiSelectElement } from '../elements/static-multi-select';
import type { StaticSelectElement } from '../elements/static-select';
import type { TextInputElement } from '../elements/text-input';
import type { TimePickerElement } from '../elements/timepicker';
import type { UserMultiSelectElement } from '../elements/user-multi-select';
import type { UserSelectElement } from '../elements/user-select';

// Blocks

import type { ActionsBlock } from '../blocks/actions';
import type { ContextBlock } from '../blocks/context';
import type { DividerBlock } from '../blocks/divider';
import type { FileBlock } from '../blocks/file';
import type { HeaderBlock } from '../blocks/header';
import type { ImageBlock } from '../blocks/image';
import type { InputBlock } from '../blocks/input';
import type { SectionBlock } from '../blocks/section';

export type ActionsElement =
  ButtonElement
  | ChannelSelectElement
  | CheckboxesElement
  | ConversationSelectElement
  | DatePickerElement
  | ExternalSelectElement
  | OverflowMenuElement
  | RadioButtonsElement
  | StaticSelectElement
  | TimePickerElement
  | UserSelectElement;

export type SectionElement =
  ButtonElement
  | ChannelMultiSelectElement
  | ChannelSelectElement
  | CheckboxesElement
  | ConversationMultiSelectElement
  | ConversationSelectElement
  | DatePickerElement
  | ExternalMultiSelectElement
  | ExternalSelectElement
  | ImgElement
  | OverflowMenuElement
  | RadioButtonsElement
  | StaticMultiSelectElement
  | StaticSelectElement
  | TimePickerElement
  | UserMultiSelectElement
  | UserSelectElement;

export type InputElement =
  | ChannelMultiSelectElement
  | ChannelSelectElement
  | CheckboxesElement
  | ConversationMultiSelectElement
  | ConversationSelectElement
  | DatePickerElement
  | ExternalMultiSelectElement
  | ExternalSelectElement
  | RadioButtonsElement
  | StaticMultiSelectElement
  | StaticSelectElement
  | TextInputElement
  | TimePickerElement
  | UserMultiSelectElement
  | UserSelectElement;

export type ContextElement = ImgElement | string;

export type Block =
  ActionsBlock
  | ContextBlock
  | DividerBlock
  | FileBlock
  | HeaderBlock
  | ImageBlock
  | InputBlock
  | SectionBlock;

export type ViewBlock =
  ActionsBlock
  | ContextBlock
  | DividerBlock
  | HeaderBlock
  | ImageBlock
  | InputBlock
  | SectionBlock;
