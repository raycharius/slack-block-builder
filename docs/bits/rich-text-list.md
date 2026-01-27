# Rich Text List

?> **Note:** This document is a reference to the `RichTextListBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [Rich Text Block docs](https://docs.slack.dev/reference/block-kit/blocks#rich_text_list) on Slack's doc site.

### Creating an Instance 

```javascript
import { RichTextList } from 'slack-block-builder';

const myObj = RichTextList(params?);
```

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.RichTextList(params?);
```

### Params

`style` – *String* – Either `'bullet'` or `'ordered'`

`indent` – *Number* – Indentation level (0-8)

`border` – *Number* – Whether to show a border (0 or 1)

### Setter Methods

All setter methods return `this`, the instance of `RichTextListBuilder` on which it is called.

```javascript
RichTextListBuilder.elements(...elements);
```

Adds list items to the list. Each item should be a `RichTextSection` builder.

### Example

```javascript
import { RichTextList, RichTextSection, RichTextText } from 'slack-block-builder';

RichTextList({ style: 'bullet' })
  .elements(
    RichTextSection().elements(RichTextText({ text: 'First item' })),
    RichTextSection().elements(RichTextText({ text: 'Second item' }))
  );
```

### Other Methods

```javascript
RichTextListBuilder.end();
```

Performs no alterations to the object on which it is called.
