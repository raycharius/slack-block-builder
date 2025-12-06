# Rich Text Section

?> **Note:** This document is a reference to the `RichTextSectionBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [Rich Text Block docs](https://docs.slack.dev/reference/block-kit/blocks#rich_text_section) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `RichTextSectionBuilder` is available as both a top-level import and as a member of its 'category', `Bits`:

```javascript
import { RichTextSection } from 'slack-block-builder';

const myObj = RichTextSection(params?);
```

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.RichTextSection(params?);
```

### Setter Methods

All setter methods return `this`, the instance of `RichTextSectionBuilder` on which it is called.

```javascript
RichTextSectionBuilder.elements(...elements);
```

Adds inline rich text elements to the section. Accepts `RichTextText`, `RichTextEmoji`, `RichTextLink`, `RichTextUser`, `RichTextChannel`, `RichTextUsergroup`, `RichTextBroadcast`, and `RichTextDate` builders.

### Example

```javascript
import { RichTextSection, RichTextText, RichTextEmoji } from 'slack-block-builder';

RichTextSection()
  .elements(
    RichTextText({ text: 'Hello ' }).bold(),
    RichTextEmoji({ name: 'wave' })
  );
```

### Other Methods

```javascript
RichTextSectionBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing tag for those who prefer an explicit end.
