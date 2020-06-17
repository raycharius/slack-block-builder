# Change Log

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
