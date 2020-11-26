# Change Log

## v1.9.0 – 2020-11-26

* Add `ignoreMarkdown` to `Message` object.
* Fix types for `Context.elements()` args.
* Fix tests for `onCharacterEntered` and `onEnterPressed`.


## v1.8.0 – 2020-11-25

* Add `fallback` to `Attachment` object.

## v1.7.2 – 2020-11-09

* Small code refactoring
* Update TypeScript definitions

## v1.7.1 – 2020-10-13

* Update TypeScript definitions

## v1.7.0 – 2020-10-17

* Add `TimePicker` input element.
* Support `dispatch_action` parameter for input block (`dispatchAction` method in `Input` object).
* Support `dispatch_action_config` for plain-text input (`dispatchActionOnCharacterEntered` and `dispatchActionOnEnterPressed` methods on `TextInput` object).
* Add TypeScript definitions.

## v1.6.1 – 2020-10-13

* Parameter `text` in the `ConfirmationDialog` object now supports markdown.

## v1.6.0 – 2020-07-30

* Add `Header` block.

## v1.5.0 – 2020-07-12

* Now all falsy values passed into appending methods are filtered before validation, not just `undefined`, making it easier to work with conditions.

## v1.4.0 – 2020-07-01

* Add support for message attachments using the `Message.attachments()` method, passing in objects created through the `Bits.Attachment()` method.
* Add `Message.getAttachments()` method (works the same as the existing `Surface.getBlocks()` method).

## v1.3.1 – 2020-06-30

* Add support for markdown for the `description` property of the `Options` `Bit` object.

## v1.2.1 – 2020-06-27

* Fix issue where Slack timestamp format not permitted for `ts` and `threadTs` parameters of the `Message` surface object.

## v1.2.0 – 2020-06-27

* Parameter `ts` for the `Message` surface object is now supported.

## v1.1.0 – 2020-06-17

* Methods that build a `Surface` object can now be called multiple times. Calling a building method after the initial build does not mutate the object in any way – it just returns the built result. These methods include `buildToJSON`, `buildToObject`, `getBlocks()`, `printPreviewUrl()`.
* Add links to Slack channels for discussing **Block Builder** to the README.        

## v1.0.0 – 2020-06-17

* Add `getBlocks()` method to all `Surface` objects.
* Add doc site at [https://blockbuilder.dev](https://blockbuilder.dev).

## v0.1.4 – 2020-06-14

* Fix minor typo in class name that was creating issue with doc generation.
* Add JSDoc comments with links to Slack API for a few classes.

## v0.1.3 - 2020-06-13

* Add project logo (kudos to Alexey Chernyshov).
* Beautify README.md for project.
* Update images to reflect new logo.

## v0.1.2 - 2020-06-12

* Add `inChannel()` method to `Message` object.

## v0.1.1 - 2020-06-10

* Fix issue where strings passed to the `fields()` method of a `Section` object would be mutated into plain text objects instead of markdown text objects.
* Fix issue where strings passed to the `elements()` method of a `Context` object would be mutated into plain text objects instead of markdown text objects.
* Fix type in JSDoc for `TextInput` object (intiialValue => initialValue).

## v0.1.0 - 2020-06-09

* Initial Release and Commit
