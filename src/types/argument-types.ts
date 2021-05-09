// Elements

import type { ButtonBuilder } from '../elements/button';
import type { ChannelMultiSelectBuilder } from '../elements/channel-multi-select';
import type { ChannelSelectBuilder } from '../elements/channel-select';
import type { CheckboxesBuilder } from '../elements/checkboxes';
import type { ConversationMultiSelectBuilder } from '../elements/conversation-multi-select';
import type { ConversationSelectBuilder } from '../elements/conversation-select';
import type { DatePickerBuilder } from '../elements/datepicker';
import type { ExternalMultiSelectBuilder } from '../elements/external-multi-select';
import type { ExternalSelectBuilder } from '../elements/external-select';
import type { ImgBuilder } from '../elements/img';
import type { OverflowMenuBuilder } from '../elements/overflow-menu';
import type { RadioButtonsBuilder } from '../elements/radio-buttons';
import type { StaticMultiSelectBuilder } from '../elements/static-multi-select';
import type { StaticSelectBuilder } from '../elements/static-select';
import type { TextInputBuilder } from '../elements/text-input';
import type { TimePickerBuilder } from '../elements/timepicker';
import type { UserMultiSelectBuilder } from '../elements/user-multi-select';
import type { UserSelectBuilder } from '../elements/user-select';

// Blocks

import type { ActionsBuilder } from '../blocks/actions';
import type { ContextBuilder } from '../blocks/context';
import type { DividerBuilder } from '../blocks/divider';
import type { FileBuilder } from '../blocks/file';
import type { HeaderBuilder } from '../blocks/header';
import type { ImageBuilder } from '../blocks/image';
import type { InputBuilder } from '../blocks/input';
import type { SectionBuilder } from '../blocks/section';

export type ActionsElementBuilder =
  ButtonBuilder
  | ChannelSelectBuilder
  | CheckboxesBuilder
  | ConversationSelectBuilder
  | DatePickerBuilder
  | ExternalSelectBuilder
  | OverflowMenuBuilder
  | RadioButtonsBuilder
  | StaticSelectBuilder
  | TimePickerBuilder
  | UserSelectBuilder;

export type SectionElementBuilder =
  ButtonBuilder
  | ChannelMultiSelectBuilder
  | ChannelSelectBuilder
  | CheckboxesBuilder
  | ConversationMultiSelectBuilder
  | ConversationSelectBuilder
  | DatePickerBuilder
  | ExternalMultiSelectBuilder
  | ExternalSelectBuilder
  | ImgBuilder
  | OverflowMenuBuilder
  | RadioButtonsBuilder
  | StaticMultiSelectBuilder
  | StaticSelectBuilder
  | TimePickerBuilder
  | UserMultiSelectBuilder
  | UserSelectBuilder;

export type InputElementBuilder =
  | ChannelMultiSelectBuilder
  | ChannelSelectBuilder
  | CheckboxesBuilder
  | ConversationMultiSelectBuilder
  | ConversationSelectBuilder
  | DatePickerBuilder
  | ExternalMultiSelectBuilder
  | ExternalSelectBuilder
  | RadioButtonsBuilder
  | StaticMultiSelectBuilder
  | StaticSelectBuilder
  | TextInputBuilder
  | TimePickerBuilder
  | UserMultiSelectBuilder
  | UserSelectBuilder;

export type ContextElementBuilder = ImgBuilder | string;

export type BlockBuilder =
  ActionsBuilder
  | ContextBuilder
  | DividerBuilder
  | FileBuilder
  | HeaderBuilder
  | ImageBuilder
  | InputBuilder
  | SectionBuilder;

export type ViewBlockBuilder =
  ActionsBuilder
  | ContextBuilder
  | DividerBuilder
  | HeaderBuilder
  | ImageBuilder
  | InputBuilder
  | SectionBuilder;
