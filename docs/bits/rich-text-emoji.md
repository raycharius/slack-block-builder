# Rich Text Emoji

?> **Note:** This document is a reference to the `RichTextEmojiBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [Rich Text Block docs](https://docs.slack.dev/reference/block-kit/blocks#element-types) on Slack's doc site.

### Creating an Instance 

```javascript
import { RichTextEmoji } from 'slack-block-builder';

const myObj = RichTextEmoji(params?);
```

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.RichTextEmoji(params?);
```

### Params

`name` – *String* – The emoji name without colons (e.g., `'wave'`)

`unicode` – *String* – Lowercase hexadecimal Unicode representation

`url` – *String* – URL for custom emoji

### Example

```javascript
import { RichTextEmoji } from 'slack-block-builder';

RichTextEmoji({ name: 'wave' });
RichTextEmoji({ name: 'thumbsup' });
```

### Other Methods

```javascript
RichTextEmojiBuilder.end();
```

Performs no alterations to the object on which it is called.
