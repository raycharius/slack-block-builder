# Message

?> **Note:** This document is a reference to the `MessageBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Message docs](https:&#x2F;&#x2F;api.slack.com&#x2F;messaging&#x2F;composing) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `MessageBuilder` is available as both a top-level import and as a member of its 'category', `Surfaces`:

```javascript
import { Message } from 'slack-block-builder';

const myObj = Message(params?);

```

```javascript
import { Surfaces } from 'slack-block-builder';

const myObj = Surfaces.Message(params?);
```

### Params

Each instance of the `MessageBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`channel` – *String*

`postAt` – *Int*

`text` – *String*

`threadTs` – *String*

`ts` – *String*

`unfurlLinks` - *Boolean*

`unfurlMedia` - *Boolean*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `MessageBuilder` on which it is called.

```javascript
MessageBuilder.attachments([Attachment1[, ...[, AttachmentN]]);
```

Adds attachments to your message. 
```javascript
MessageBuilder.blocks([Block1[, ...[, BlockN]]);
```

Adds blocks to your view or message. 
```javascript
MessageBuilder.asUser(boolean?);
```

Sets the message to be sent as either the user whose auth token is being used or as the bot user associated with your app. Defaults to `true`.
```javascript
MessageBuilder.deleteOriginal(boolean?);
```

Instructs the Slack API to delete the message from which the interaction originated when sending the current message. Defaults to `true`.
```javascript
MessageBuilder.ephemeral(boolean?);
```

Instructs the Slack API to display the message only to the user who invoked the interaction payload or slash command. Defaults to `true`.
```javascript
MessageBuilder.ignoreMarkdown(boolean?);
```

Instructs the Slack API to ignore any markdown in the text property of the message. Defaults to `false`.
```javascript
MessageBuilder.inChannel(boolean?);
```

Instructs the Slack API to make the message visible to everyone in the channel from which the interaction payload or slash command originated. Defaults to `true`.
```javascript
MessageBuilder.replaceOriginal(boolean?);
```

Instructs the Slack API to replace the original message, from which the interaction payload originated, with the current message. Defaults to `true`.
```javascript
MessageBuilder.channel(string);
```

Sets the Slack channel ID to which the message will be sent via the API. 
```javascript
MessageBuilder.postAt(string);
```

Sets a time in the future for the message to be sent to the channel or user, as a scheduled message. 
```javascript
MessageBuilder.text(string);
```

Sets the text displayed for buttons, headers, confirmation dialogs, sections, context blocks, and options. 
```javascript
MessageBuilder.threadTs(string);
```

Instructs the Slack API to send the message to the thread of the message associated with the timestamp. 
```javascript
MessageBuilder.ts(string);
```

Instructs the Slack API to use the message to replaced an existing message. 

### Other Methods

The `MessageBuilder` object also has other methods available:

```javascript
MessageBuilder.buildToJSON();
```

Builds the view and returns it as a Slack API-compatible JSON string. 
```javascript
MessageBuilder.buildToObject();
```

Builds the view and returns it as a Slack API-compatible object. 
```javascript
MessageBuilder.getAttachments();
```

Builds the view and returns a Slack API-compatible array of attachments. 
```javascript
MessageBuilder.getBlocks();
```

Builds the view and returns a Slack API-compatible array of blocks. 
```javascript
MessageBuilder.getPreviewUrl();
```

Builds the view and returns the preview URL in order to open and preview the view on Slack's Block Kit Builder web application. 
```javascript
MessageBuilder.printPreviewUrl();
```

Calls getPreviewUrl to build the preview URL and log it to the console. 
