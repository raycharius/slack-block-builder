# Configuring Views

As a general rule, **Block Builder** is focused on UI and the logic around a user experience. However, each `Surface` object also has methods that configure how Slack interacts with the payload.

A few examples of these methods would be:

<!-- tabs:start -->

#### ** Clear On Close **

```javascript
Modal.clearOnClose()
```

Tells Slack that it needs to clear all open modals in the stack when the one in question is closed.

#### ** As User **

```javascript
Message.asUser()
```

Tells Slack that the message should be sent as a user. With a bot token, it sends as the bot user, with a user scoped token, from the actual user. 

#### ** Replace Original **

```javascript
Message.replaceOriginal()
```
When using this for a `Message` object that is deployed through a response URL, this tells Slack to replace the original message from which the actions payload originated.

<!-- tabs:end -->

Essentially, having these methods available allows you to compose complete payloads with **Block Builder**.

When using these methods within a `Surface` object:

* The result of calling `Message.buildToJSON()` is the full payload for the `chat.postMessage` API method.
* The result of calling `Modal.buildToJSON()` is the full payload for the `view` parameter for the `views.open`, `views.update`, and `views.push` API methods.
* The result of calling `HomeTab.buildToJSON()` is the full payload for the `view` parameter for the `views.publish` API method.

However, you are not forced into using this paradigm. Each `Surface` object also provides a `getBlocks()` method to retrieve an array of the `Blocks` that compose the UI. More on that in the [Build Methods](build-methods.md) section. 