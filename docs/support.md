# Supported Components

At the time of writing this doc, **Block Builder** supports every component provided by the [Slack Block Kit](https://api.slack.com/block-kit) framework.

Below is a list of supported components and how to access them in **Block Builder**. 

?> **Note:** A few of the [composition objects](https://api.slack.com/reference/block-kit/composition-objects), such as the plain-text and markdown objects are not mentioned here, as they are built in the background, as part of a more UI-focus component. 

| **Name**             | **Type**           | **Support**         | **Accessed Via**                  | **Docs**    
|----------------------|--------------------|---------------------|-----------------------------------|--------------
| Home Tab             | Surface            | **Yes**             | `HomeTab()`                       | [View Docs](../../slack-block-builder-docs/docs/surfaces/home-tab.md)
| Message              | Surface            | **Yes**             | `Message()`                       | [View Docs](../../slack-block-builder-docs/docs/surfaces/message.md)
| Modal                | Surface            | **Yes**             | `Modal()`                         | [View Docs](../../slack-block-builder-docs/docs/surfaces/modal.md)
| Actions              | Block              | **Yes**             | `Blocks.Actions()`                | [View Docs](../../slack-block-builder-docs/docs/blocks/actions.md)
| Context              | Block              | **Yes**             | `Blocks.Context()`                | [View Docs](../../slack-block-builder-docs/docs/blocks/context.md)
| Divider              | Block              | **Yes**             | `Blocks.Divider()`                | [View Docs](../../slack-block-builder-docs/docs/blocks/divider.md)
| File                 | Block              | **Yes**             | `Blocks.File()`                   | [View Docs](../../slack-block-builder-docs/docs/blocks/file.md)
| Header               | Block              | **Yes**             | `Blocks.Header()`                 | [View Docs](../../slack-block-builder-docs/docs/blocks/header.md)
| Image                | Block              | **Yes**             | `Blocks.Image()`                  | [View Docs](../../slack-block-builder-docs/docs/blocks/image.md)
| Input                | Block              | **Yes**             | `Blocks.Input()`                  | [View Docs](../../slack-block-builder-docs/docs/blocks/input.md)
| Section              | Block              | **Yes**             | `Blocks.Section()`                | [View Docs](../../slack-block-builder-docs/docs/blocks/section.md)
| Button               | Element            | **Yes**️             | `Elements.Button()`               | [View Docs](../../slack-block-builder-docs/docs/elements/button.md)
| Checkboxes           | Element            | **Yes**             | `Elements.Checkboxes()`           | [View Docs](../../slack-block-builder-docs/docs/elements/checkboxes.md)
| Date Picker          | Element            | **Yes**             | `Elements.DatePicker()`           | [View Docs](../../slack-block-builder-docs/docs/elements/datepicker.md)
| Image                | Element            | **Yes**             | `Elements.Img()`                  | [View Docs](../../slack-block-builder-docs/docs/elements/img.md)
| Overflow Menu        | Element            | **Yes**             | `Elements.OverflowMenu()`         | [View Docs](../../slack-block-builder-docs/docs/elements/overflow-menu.md)
| Radio Buttons        | Element            | **Yes**             | `Elements.RadioButtons()`         | [View Docs](../../slack-block-builder-docs/docs/elements/radio-buttons.md)
| Plain-Text Input     | Element            | **Yes**             | `Elements.TextInput()`            | [View Docs](../../slack-block-builder-docs/docs/elements/text-input.md)
| Select Menus         | Element            | **Yes**             | `Elements.[Type]Select()`         | 
| Multi-Select Menus   | Element            | **Yes**             | `Elements.[Type]MultiSelect()`    | 
| Option               | Composition Object | **Yes**             | `Bits.Option()`                   | [View Docs](../../slack-block-builder-docs/docs/bits/option.md)
| Confirm Dialog       | Composition Object | **Yes**             | `Bits.ConfirmationDialog()`       | [View Docs](../../slack-block-builder-docs/docs/bits/confirmation-dialog.md)
| Option Group         | Composition Object | **Yes**             | `Bits.OptionGroup()`              | [View Docs](../../slack-block-builder-docs/docs/bits/option-group.md)
| Attachment           | Legacy Feature     | **Yes**             | `Bits.Attachment()`              | [View Docs](../../slack-block-builder-docs/docs/bits/attachment.md)
