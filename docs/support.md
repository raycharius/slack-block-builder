# Supported Components

At the time of writing this doc, **Block Builder** supports every component provided by the [Slack Block Kit](https://api.slack.com/block-kit) framework.

Below is a list of supported components and how to access them in **Block Builder**. 

?> **Note:** A few of the [composition objects](https://docs.slack.dev/reference/block-kit/composition-objects), such as the plain-text and markdown objects are not mentioned here, as they are built in the background, as part of a more UI-focus component. 

| **Name**            | **Type**           | **Support**         | **Accessed Via**               | **Docs**    
|---------------------|--------------------|---------------------|--------------------------------|--------------
| Home Tab            | Surface            | **Yes**             | `HomeTab()`                    | [View Docs](/surfaces/home-tab.md)
| Message             | Surface            | **Yes**             | `Message()`                    | [View Docs](/surfaces/message.md)
| Modal               | Surface            | **Yes**             | `Modal()`                      | [View Docs](/surfaces/modal.md)
| Actions             | Block              | **Yes**             | `Blocks.Actions()`             | [View Docs](/blocks/actions.md)
| Context             | Block              | **Yes**             | `Blocks.Context()`             | [View Docs](/blocks/context.md)
| Divider             | Block              | **Yes**             | `Blocks.Divider()`             | [View Docs](/blocks/divider.md)
| File                | Block              | **Yes**             | `Blocks.File()`                | [View Docs](/blocks/file.md)
| Header              | Block              | **Yes**             | `Blocks.Header()`              | [View Docs](/blocks/header.md)
| Image               | Block              | **Yes**             | `Blocks.Image()`               | [View Docs](/blocks/image.md)
| Input               | Block              | **Yes**             | `Blocks.Input()`               | [View Docs](/blocks/input.md)
| Section             | Block              | **Yes**             | `Blocks.Section()`             | [View Docs](/blocks/section.md)
| Video               | Video              | **Yes**             | `Blocks.Video()`               | [View Docs](/blocks/video.md)
| Rich Text           | Block              | **Yes**             | `Blocks.RichText()`            | [View Docs](/blocks/rich-text.md)
| Markdown            | Block              | **Yes**             | `Blocks.Markdown()`            | [View Docs](/blocks/markdown.md)
| Table               | Block              | **Yes**             | `Blocks.Table()`               | [View Docs](/blocks/table.md)
| Context Actions     | Block              | **Yes**             | `Blocks.ContextActions()`      | [View Docs](/blocks/context-actions.md)
| Button              | Element            | **Yes**️             | `Elements.Button()`            | [View Docs](/elements/button.md)
| Checkboxes          | Element            | **Yes**             | `Elements.Checkboxes()`        | [View Docs](/elements/checkboxes.md)
| Date Picker         | Element            | **Yes**             | `Elements.DatePicker()`        | [View Docs](/elements/date-picker.md)
| Date Time Picker    | Element            | **Yes**             | `Elements.DateTimePicker()`    | [View Docs](/elements/date-time-picker.md)
| Email Input         | Element            | **Yes**             | `Elements.EmailInput()`        | [View Docs](/elements/email-input.md)
| Image               | Element            | **Yes**             | `Elements.Img()`               | [View Docs](/elements/img.md)
| Number Input        | Element            | **Yes**             | `Elements.NumberInput()`       | [View Docs](/elements/number-input.md)
| Overflow Menu       | Element            | **Yes**             | `Elements.OverflowMenu()`      | [View Docs](/elements/overflow-menu.md)
| Radio Buttons       | Element            | **Yes**             | `Elements.RadioButtons()`      | [View Docs](/elements/radio-buttons.md)
| Plain-Text Input    | Element            | **Yes**             | `Elements.TextInput()`         | [View Docs](/elements/text-input.md)
| Time Picker         | Element            | **Yes**             | `Elements.TimePicker()`        | [View Docs](/elements/timepicker.md)
| Select Menus        | Element            | **Yes**             | `Elements.[Type]Select()`      | 
| Multi-Select Menus  | Element            | **Yes**             | `Elements.[Type]MultiSelect()` |
| URL Input           | Element            | **Yes**             | `Elements.URLInput()`          | [View Docs](/elements/url-input.md)
| Workflow Button     | Element            | **Yes**             | `Elements.WorkflowButton()`    | [View Docs](/elements/workflow-button.md)
| Icon Button         | Element            | **Yes**             | `Elements.IconButton()`        | [View Docs](/elements/icon-button.md)
| Feedback Buttons    | Element            | **Yes**             | `Elements.FeedbackButtons()`   | [View Docs](/elements/feedback-buttons.md)
| Rich Text Input     | Element            | **Yes**             | `Elements.RichTextInput()`     | [View Docs](/elements/rich-text-input.md)
| File Input          | Element            | **Yes**             | `Elements.FileInput()`         | [View Docs](/elements/file-input.md)
| Attachment          | Legacy Feature     | **Yes**             | `Bits.Attachment()`            | [View Docs](/bits/attachment.md)
| Confirmation Dialog | Composition Object | **Yes**             | `Bits.ConfirmationDialog()`    | [View Docs](/bits/confirmation-dialog.md)
| Option              | Composition Object | **Yes**             | `Bits.Option()`                | [View Docs](/bits/option.md)
| Option Group        | Composition Object | **Yes**             | `Bits.OptionGroup()`           | [View Docs](/bits/option-group.md)
| Rich Text Section   | Composition Object | **Yes**             | `Bits.RichTextSection()`       | [View Docs](/bits/rich-text-section.md)
| Rich Text List      | Composition Object | **Yes**             | `Bits.RichTextList()`          | [View Docs](/bits/rich-text-list.md)
| Rich Text Quote     | Composition Object | **Yes**             | `Bits.RichTextQuote()`         | [View Docs](/bits/rich-text-quote.md)
| Rich Text Preformatted | Composition Object | **Yes**          | `Bits.RichTextPreformatted()`  | [View Docs](/bits/rich-text-preformatted.md)
| Rich Text Text      | Composition Object | **Yes**             | `Bits.RichTextText()`          | [View Docs](/bits/rich-text-text.md)
| Rich Text Emoji     | Composition Object | **Yes**             | `Bits.RichTextEmoji()`         | [View Docs](/bits/rich-text-emoji.md)
| Rich Text Link      | Composition Object | **Yes**             | `Bits.RichTextLink()`          | [View Docs](/bits/rich-text-link.md)
| Rich Text User      | Composition Object | **Yes**             | `Bits.RichTextUser()`          | [View Docs](/bits/rich-text-user.md)
| Rich Text Channel   | Composition Object | **Yes**             | `Bits.RichTextChannel()`       | [View Docs](/bits/rich-text-channel.md)
| Rich Text Usergroup | Composition Object | **Yes**             | `Bits.RichTextUsergroup()`     | [View Docs](/bits/rich-text-usergroup.md)
| Rich Text Broadcast | Composition Object | **Yes**             | `Bits.RichTextBroadcast()`     | [View Docs](/bits/rich-text-broadcast.md)
| Rich Text Date      | Composition Object | **Yes**             | `Bits.RichTextDate()`          | [View Docs](/bits/rich-text-date.md)
| Rich Text Color     | Composition Object | **Yes**             | `Bits.RichTextColor()`         | [View Docs](/bits/rich-text-color.md)
| Rich Text Team      | Composition Object | **Yes**             | `Bits.RichTextTeam()`          | [View Docs](/bits/rich-text-team.md)

