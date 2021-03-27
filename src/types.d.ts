declare module 'slack-block-builder' {
  // https://github.com/sindresorhus/type-fest/blob/e6827d94e3af8b5611cf330263df53f62ce683d6/source/opaque.d.ts
  type Opaque<Type, Token = unknown> = Type & { readonly __opaque__: Token };

  namespace SlackBlockBuilder {
    namespace Bit {
      interface Bit {
        end(): this;
      }

      interface AttachmentParams {
        color?: string;
        fallback?: string;
      }

      interface Attachment extends Bit {
        color(color: string): this;
        fallback(fallback: string): this;
        blocks(...blocks: Array<Block.Block | Block.Block[]>): this;
      }

      interface OptionGroupParams {
        label?: string;
      }

      interface OptionGroup extends Bit {
        label(label: string): this;
        options(...options: Array<Option | Option[]>): this;
      }

      interface OptionParams {
        text?: string;
        value?: string;
        description?: string;
        url?: string;
      }

      interface Option extends Bit {
        text(text: string): this;
        value(value: string): this;
        description(description: string): this;
        url(url: string): this;
      }

      interface ConfirmationDialogParams {
        title?: string;
        text?: string;
        confirm?: string;
        deny?: string;
      }

      interface ConfirmationDialog extends Bit {
        title(title: string): this;
        text(text: string): this;
        confirm(confirm: string): this;
        deny(deny: string): this;
        primary(): this;
        danger(): this;
      }

      export function Attachment(params?: AttachmentParams): Attachment;
      export function ConfirmationDialog(
        params?: ConfirmationDialogParams
      ): ConfirmationDialog;
      export function Option(params?: OptionParams): Option;
      export function OptionGroup(params?: OptionGroupParams): OptionGroup;
    }

    namespace Block {
      interface Block {
        blockId(blockId: string): this;
        end(): this;
      }

      interface ActionsParams {
        blockId?: string;
      }

      interface Actions extends Block {
        elements(...elements: Array<Element.Element | Element.Element[]>): this;
      }

      interface ContextParams {
        blockId?: string;
      }

      type ContextElement = Element.Img | string;

      interface Context extends Block {
        elements(...elements: Array<ContextElement | ContextElement[]>): this;
      }

      interface DividerParams {
        blockId?: string;
      }

      interface Divider extends Block {}

      interface FileParams {
        blockId?: string;
        externalId?: string;
      }

      interface File extends Block {
        externalId(externalId: string): this;
      }

      interface HeaderParams {
        blockId?: string;
        text?: string;
      }

      interface Header extends Block {
        text(text: string): this;
      }

      interface ImageParams {
        blockId?: string;
        imageUrl?: string;
        altText?: string;
        title?: string;
      }

      interface Image extends Block {
        imageUrl(imageUrl: string): this;
        altText(altText: string): this;
        title(title: string): this;
      }

      interface InputParams {
        blockId?: string;
        label?: string;
        hint?: string;
      }

      interface Input extends Block {
        label(label: string): this;
        element(element: Element.Element): this;
        hint(hint: string): this;
        optional(): this;
        dispatchAction(): this;
      }

      interface SectionParams {
        blockId?: string;
        text?: string;
      }

      interface Section extends Block {
        text(text: string): this;
        fields(...fields: Array<string | string[]>): this;
        accessory(element: Element.Element): this;
      }
    }

    namespace Element {
      interface Element {
        end(): this;
      }

      interface ActionElement extends Element {
        actionId(actionId: string): this;
      }

      interface ConfirmableElement extends ActionElement {
        confirm(obj: Bit.ConfirmationDialog): this;
      }

      interface SelectableElement extends ConfirmableElement {
        options(...options: Array<Bit.Option | Bit.Option[]>): this;
      }

      interface SelectElement extends ConfirmableElement {
        placeholder(placeholder: string): this;
      }

      interface MultiSelectElement extends SelectElement {
        maxSelectedItems(maxSelectedItems: number): this;
      }

      interface ButtonParams {
        actionId?: string;
        text?: string;
        url?: string;
        value?: string;
      }

      interface Button extends ConfirmableElement {
        text(text: string): this;
        url(url: string): this;
        value(value: string): this;
        primary(): this;
        danger(): this;
      }

      interface ChannelMultiSelectParams {
        actionId?: string;
        placeholder?: string;
        maxSelectedItems?: number;
      }

      interface ChannelMultiSelect extends MultiSelectElement {
        initialChannels(...strings: Array<string | string[]>): this;
      }

      interface ChannelSelectParams {
        actionId?: string;
        placeholder?: string;
        initialChannel?: string;
      }

      interface ChannelSelect extends SelectElement {
        initialChannel(initialChannel: string): this;
        responseUrlEnabled(): this;
      }

      interface CheckboxesParams {
        actionId?: string;
      }

      interface Checkboxes extends SelectableElement {
        options(...options: Array<Bit.Option | Bit.Option[]>): this;
      }

      interface ConversationMultiSelectParams {
        actionId?: string;
        placeholder?: string;
        maxSelectedItems?: number;
      }

      interface ConversationMultiSelect extends MultiSelectElement {
        initialConversations(...strings: Array<string | string[]>): this;
        defaultToCurrentConversation(): this;
        filter(...filters: Array<string | string[]>): this;
        excludeExternalSharedChannels(): this;
        excludeBotUsers(): this;
      }

      interface ConversationSelectParams {
        actionId?: string;
        placeholder?: string;
        initialConversation?: string;
      }

      interface ConversationSelect extends SelectElement {
        initialConversation(initialConversation: string): this;
        defaultToCurrentConversation(): this;
        responseUrlEnabled(): this;
        filter(...filters: Array<string | string[]>): this;
        excludeExternalSharedChannels(): this;
        excludeBotUsers(): this;
      }

      interface DatePickerParams {
        actionId?: string;
        placeholder?: string;
        initialDate?: Date;
      }

      interface DatePicker extends ConfirmableElement {
        placeholder(placeholder: string): this;
        initialDate(date: Date): this;
      }

      interface ExternalMultiSelectParams {
        actionId?: string;
        placeholder?: string;
        maxSelectedItems?: number;
        minQueryLength?: number;
      }

      interface ExternalMultiSelect extends MultiSelectElement {
        minQueryLength(minQueryLength: number): this;
        initialOptions(...options: Array<Bit.Option | Bit.Option[]>): this;
      }

      interface ExternalSelectParams {
        actionId?: string;
        placeholder?: string;
        minQueryLength?: number;
      }

      interface ExternalSelect extends SelectElement {
        initialOption(option: Bit.Option): this;
        minQueryLength(minQueryLength: number): this;
      }

      interface ImgParams {
        imageUrl?: string;
        altText?: string;
      }

      interface Img extends Element {
        imageUrl(imageUrl: string): this;
        altText(altText: string): this;
      }

      interface OverflowMenuParams {
        actionId?: string;
      }

      interface OverflowMenu extends SelectableElement {}

      interface RadioButtonsParams {
        actionId?: string;
      }

      interface RadioButtons extends SelectableElement {
        initialOption(option: Bit.Option): this;
      }

      interface StaticMultiSelectParams {
        actionId?: string;
        placeholder?: string;
        maxSelectedItems?: number;
      }

      interface StaticMultiSelect extends MultiSelectElement {
        options(...options: Array<Bit.Option | Bit.Option[]>): this;
        optionGroups(
          ...optionGroups: Array<Bit.OptionGroup | Bit.OptionGroup[]>
        ): this;
        initialOptions(...options: Array<Bit.Option | Bit.Option[]>): this;
      }

      interface StaticSelectParams {
        actionId?: string;
        placeholder?: string;
      }

      interface StaticSelect extends SelectElement {
        options(...options: Array<Bit.Option | Bit.Option[]>): this;
        optionGroups(
          ...optionGroups: Array<Bit.OptionGroup | Bit.OptionGroup[]>
        ): this;
        initialOption(option: Bit.Option): this;
      }

      interface TextInputParams {
        actionId?: string;
        placeholder?: string;
        initialValue?: string;
        minLength?: number;
        maxLength?: number;
      }

      interface TextInput extends ActionElement {
        placeholder(placeholder: string): this;
        initialValue(initialValue: string): this;
        multiline(): this;
        minLength(minLength: number): this;
        maxLength(maxLength: number): this;
        dispatchActionOnEnterPressed(): this;
        dispatchActionOnCharacterEntered(): this;
      }

      interface TimePickerParams {
        actionId?: string;
        placeholder?: string;
        initialTime?: string;
      }

      interface TimePicker extends ConfirmableElement {
        placeholder(placeholder: string): this;
        initialTime(time: string): this;
      }

      interface UserMultiSelectParams {
        actionId?: string;
        placeholder?: string;
        maxSelectedItems?: number;
      }

      interface UserMultiSelect extends MultiSelectElement {
        maxSelectedItems(maxSelectedItems: number): this;
      }

      interface UserSelectParams {
        actionId?: string;
        placeholder?: string;
        initialUser?: string;
      }

      interface UserSelect extends SelectElement {
        initialUser(initialUser: string): this;
      }
    }

    namespace Surface {
      // We want to ensure the only way to get a value of type
      // BuiltObject is by calling buildToObject(), so we use
      // an opaque type which cannot be constructed by a user.
      type BuiltObject = Opaque<unknown, 'BuiltObject'>;

      interface Surface {
        blocks(...blocks: Array<Block.Block | Block.Block[]>): this;
        buildToObject(): BuiltObject;
        buildToJSON(): string;
        getBlocks(): Block.Block[];
        printPreviewUrl(): void;
      }

      interface AdvancedSurface extends Surface {
        privateMetaData(privateMetaData: string): this;
        callbackId(callbackId: string): this;
        externalId(externalId: string): this;
      }

      interface HomeTabParams {
        callbackId?: string;
        externalId?: string;
        privateMetaData?: string;
      }

      interface HomeTab extends AdvancedSurface {}

      interface MessageParams {
        channel?: string;
        text?: string;
        threadTs?: string;
        postAt?: string;
      }

      interface Message extends Surface {
        attachments(
          ...attachments: Array<Bit.Attachment | Bit.Attachment[]>
        ): this;
        channel(channel: string): this;
        text(text: string): this;
        asUser(): this;
        threadTs(threadTs: string): this;
        ts(ts: string): this;
        replaceOriginal(): this;
        deleteOriginal(): this;
        ephemeral(): this;
        inChannel(): this;
        postAt(timestamp: string): this;
        getAttachments(): Bit.Attachment[];
        ignoreMarkdown(): this;
      }

      interface ModalParams {
        title?: string;
        close?: string;
        submit?: string;
        callbackId?: string;
        externalId?: string;
        privateMetaData?: string;
      }

      interface Modal extends AdvancedSurface {
        title(title: string): this;
        close(close: string): this;
        submit(submit: string): this;
        clearOnClose(): this;
        notifyOnClose(): this;
      }
    }

    export const Bits: {
      Attachment(params?: Bit.AttachmentParams): Bit.Attachment;
      ConfirmationDialog(
        params?: Bit.ConfirmationDialogParams
      ): Bit.ConfirmationDialog;
      Option(params?: Bit.OptionParams): Bit.Option;
      OptionGroup(params?: Bit.OptionGroupParams): Bit.OptionGroup;
    };

    export const Blocks: {
      Actions(params?: Block.ActionsParams): Block.Actions;
      Context(params?: Block.ContextParams): Block.Context;
      Divider(params?: Block.DividerParams): Block.Divider;
      File(params?: Block.FileParams): Block.File;
      Header(params?: Block.HeaderParams): Block.Header;
      Image(params?: Block.ImageParams): Block.Image;
      Input(params?: Block.InputParams): Block.Input;
      Section(params?: Block.SectionParams): Block.Section;
    };

    export const Elements: {
      Button(params?: Element.ButtonParams): Element.Button;
      ChannelMultiSelect(
        params?: Element.ChannelMultiSelectParams
      ): Element.ChannelMultiSelect;
      ChannelSelect(
        params?: Element.ChannelSelectParams
      ): Element.ChannelSelect;
      Checkboxes(params?: Element.CheckboxesParams): Element.Checkboxes;
      ConversationSelect(
        params?: Element.ConversationSelectParams
      ): Element.ConversationSelect;
      DatePicker(params?: Element.DatePickerParams): Element.DatePicker;
      ExternalMultiSelect(
        params?: Element.ExternalMultiSelectParams
      ): Element.ExternalMultiSelect;
      ExternalSelect(
        params?: Element.ExternalSelectParams
      ): Element.ExternalSelect;
      Img(params?: Element.ImgParams): Element.Img;
      OverflowMenu(params?: Element.OverflowMenuParams): Element.OverflowMenu;
      RadioButtons(params?: Element.RadioButtonsParams): Element.RadioButtons;
      StaticMultiSelect(
        params?: Element.StaticMultiSelectParams
      ): Element.StaticMultiSelect;
      StaticSelect(params?: Element.StaticSelectParams): Element.StaticSelect;
      TextInput(params?: Element.TextInputParams): Element.TextInput;
      TimePicker(params?: Element.TimePickerParams): Element.TimePicker;
      UserMultiSelect(
        params?: Element.UserMultiSelectParams
      ): Element.UserMultiSelect;
      UserSelect(params?: Element.UserSelectParams): Element.UserSelect;
    };

    export function HomeTab(params?: Surface.HomeTabParams): Surface.HomeTab;
    export function Message(params?: Surface.MessageParams): Surface.Message;
    export function Modal(params?: Surface.ModalParams): Surface.Modal;
  }

  export = SlackBlockBuilder;
}
