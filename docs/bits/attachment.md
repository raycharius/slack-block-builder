# Attachment

?> **Note:** This document is a reference to the `AttachmentBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Attachment docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;messaging&#x2F;attachments) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `AttachmentBuilder` is available as both a top-level import and as a member of its 'category', `Bits`:

```javascript
import { Attachment } from 'slack-block-builder';

const myObj = Attachment(params?);

```

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.Attachment(params?);
```

### Params

Each instance of the `AttachmentBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`color` – *String*

`fallback` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `AttachmentBuilder` on which it is called.

```javascript
AttachmentBuilder.blocks([Block1[, ...[, BlockN]]);
```

Adds blocks to your view or message. 
```javascript
AttachmentBuilder.color(string);
```

Sets the color for the blockquote border to the left of the attachment. 
```javascript
AttachmentBuilder.fallback(string);
```

Sets the plain text summary of the attachment used in clients that can't display formatted text (eg. IRC, mobile notifications). 

### Other Methods

The `AttachmentBuilder` object also has other methods available:

```javascript
AttachmentBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
