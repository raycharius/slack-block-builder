import type {
  ButtonBuilder,
  ChannelMultiSelectBuilder,
  ChannelSelectBuilder,
  CheckboxesBuilder,
  ConversationMultiSelectBuilder,
  ConversationSelectBuilder,
  DatePickerBuilder, DateTimePickerBuilder,
  ExternalMultiSelectBuilder,
  ExternalSelectBuilder,
  FileInputBuilder,
  ImgBuilder,
  OverflowMenuBuilder,
  RadioButtonsBuilder,
  StaticMultiSelectBuilder,
  StaticSelectBuilder,
  TextInputBuilder,
  TimePickerBuilder,
  UserMultiSelectBuilder,
  UserSelectBuilder,
  WorkflowButtonBuilder,
} from '../../elements';
import type {
  ActionsBuilder,
  ContextBuilder,
  DividerBuilder,
  FileBuilder,
  HeaderBuilder,
  ImageBuilder,
  InputBuilder,
  SectionBuilder,
  VideoBuilder,
} from '../../blocks';
import { EmailInputBuilder, NumberInputBuilder, URLInputBuilder } from '../../elements';

export type ActionsElementBuilder =
  ButtonBuilder
  | ChannelSelectBuilder
  | CheckboxesBuilder
  | ConversationSelectBuilder
  | DatePickerBuilder
  | DateTimePickerBuilder
  | ExternalSelectBuilder
  | OverflowMenuBuilder
  | RadioButtonsBuilder
  | StaticSelectBuilder
  | TimePickerBuilder
  | UserSelectBuilder
  | WorkflowButtonBuilder;

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
  | UserSelectBuilder
  | WorkflowButtonBuilder;

export type InputElementBuilder =
  | ChannelMultiSelectBuilder
  | ChannelSelectBuilder
  | CheckboxesBuilder
  | ConversationMultiSelectBuilder
  | ConversationSelectBuilder
  | DatePickerBuilder
  | DateTimePickerBuilder
  | EmailInputBuilder
  | ExternalMultiSelectBuilder
  | ExternalSelectBuilder
  | NumberInputBuilder
  | RadioButtonsBuilder
  | StaticMultiSelectBuilder
  | StaticSelectBuilder
  | TextInputBuilder
  | TimePickerBuilder
  | URLInputBuilder
  | UserMultiSelectBuilder
  | UserSelectBuilder
  | FileInputBuilder;

export type ContextElement = ImgBuilder | string;

export type BlockBuilder =
  ActionsBuilder
  | ContextBuilder
  | DividerBuilder
  | FileBuilder
  | HeaderBuilder
  | ImageBuilder
  | InputBuilder
  | SectionBuilder
  | ViewBlockBuilder;

export type ViewBlockBuilder =
  ActionsBuilder
  | ContextBuilder
  | DividerBuilder
  | HeaderBuilder
  | ImageBuilder
  | InputBuilder
  | SectionBuilder
  | VideoBuilder;

export type FilterString = 'im' | 'mpim' | 'private' | 'public';

// Internal use only

export interface ObjectLiteral {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Ctor<T = Record<string, unknown>> = new (...args: any[]) => T;

export type AbstractCtor<T> = { prototype: T };

export type Undefinable<T> = T | undefined;

export type Nullable<T> = T | null;

export type Settable<T> = Undefinable<T>;

export type UndefinableArray<T> = Undefinable<T>[];

export type Appendable<T> = UndefinableArray<T | UndefinableArray<T>>;

export type Fn<T, R> = (arg: T) => R;

export type BlockBuilderReturnableFn<T> = Fn<T, Appendable<BlockBuilder>>;

export type StringReturnableFn<T> = Fn<T, string>;
