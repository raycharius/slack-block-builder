# Rich Text Quote

?> **Note:** This document is a reference to the `RichTextQuoteBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [Rich Text Block docs](https://docs.slack.dev/reference/block-kit/blocks#rich_text_quote) on Slack's doc site.

### Creating an Instance 

```javascript
import { RichTextQuote } from 'slack-block-builder';

const myObj = RichTextQuote(params?);
```

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.RichTextQuote(params?);
```

### Params

`border` – *Number* – Whether to show a border (0 or 1)

### Setter Methods

All setter methods return `this`, the instance of `RichTextQuoteBuilder` on which it is called.

```javascript
RichTextQuoteBuilder.elements(...elements);
```

Adds inline rich text elements to the quote. Accepts `RichTextText`, `RichTextEmoji`, `RichTextLink`, and other inline elements.

### Example

```javascript
import { RichTextQuote, RichTextText } from 'slack-block-builder';

RichTextQuote()
  .elements(
    RichTextText({ text: 'This is a quoted text block.' }).italic()
  );
```

### Other Methods

```javascript
RichTextQuoteBuilder.end();
```

Performs no alterations to the object on which it is called.
