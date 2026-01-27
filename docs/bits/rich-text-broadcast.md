# Rich Text Broadcast

?> **Note:** This document is a reference to the `RichTextBroadcastBuilder` object in **Block Builder**. For creating @here, @channel, or @everyone mentions in rich text.

### Creating an Instance 

```javascript
import { RichTextBroadcast } from 'slack-block-builder';

const myObj = RichTextBroadcast(params?);
```

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.RichTextBroadcast(params?);
```

### Params

`range` – *String* – The broadcast range: `'here'`, `'channel'`, or `'everyone'`

### Styling Methods

```javascript
RichTextBroadcastBuilder.bold();
RichTextBroadcastBuilder.italic();
RichTextBroadcastBuilder.strike();
RichTextBroadcastBuilder.code();
```

### Example

```javascript
import { RichTextBroadcast } from 'slack-block-builder';

RichTextBroadcast({ range: 'here' });
RichTextBroadcast({ range: 'channel' });
RichTextBroadcast({ range: 'everyone' });
```

### Other Methods

```javascript
RichTextBroadcastBuilder.end();
```
