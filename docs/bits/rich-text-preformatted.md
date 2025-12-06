# Rich Text Preformatted

?> **Note:** This document is a reference to the `RichTextPreformattedBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [Rich Text Block docs](https://docs.slack.dev/reference/block-kit/blocks#rich_text_preformatted) on Slack's doc site.

### Creating an Instance 

```javascript
import { RichTextPreformatted } from 'slack-block-builder';

const myObj = RichTextPreformatted(params?);
```

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.RichTextPreformatted(params?);
```

### Params

`border` – *Number* – Whether to show a border (0 or 1)

### Setter Methods

All setter methods return `this`, the instance of `RichTextPreformattedBuilder` on which it is called.

```javascript
RichTextPreformattedBuilder.elements(...elements);
```

Adds text or link elements to the code block. Accepts `RichTextText` and `RichTextLink` builders only.

### Example

```javascript
import { RichTextPreformatted, RichTextText } from 'slack-block-builder';

RichTextPreformatted()
  .elements(
    RichTextText({ text: 'const greeting = "Hello, World!";' })
  );
```

### Other Methods

```javascript
RichTextPreformattedBuilder.end();
```

Performs no alterations to the object on which it is called.
