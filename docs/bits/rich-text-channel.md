# Rich Text Channel

?> **Note:** This document is a reference to the `RichTextChannelBuilder` object in **Block Builder**. For creating #channel mentions in rich text.

### Creating an Instance 

```javascript
import { RichTextChannel } from 'slack-block-builder';

const myObj = RichTextChannel(params?);
```

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.RichTextChannel(params?);
```

### Params

`channelId` – *String* – The channel ID to mention (e.g., `'C1234ABCD'`)

### Styling Methods

```javascript
RichTextChannelBuilder.bold();
RichTextChannelBuilder.italic();
RichTextChannelBuilder.strike();
RichTextChannelBuilder.code();
```

### Example

```javascript
import { RichTextChannel } from 'slack-block-builder';

RichTextChannel({ channelId: 'C1234ABCD' });
```

### Other Methods

```javascript
RichTextChannelBuilder.end();
```
