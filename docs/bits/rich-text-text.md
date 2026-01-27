# Rich Text Text

?> **Note:** This document is a reference to the `RichTextTextBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [Rich Text Block docs](https://docs.slack.dev/reference/block-kit/blocks#element-types) on Slack's doc site.

### Creating an Instance 

```javascript
import { RichTextText } from 'slack-block-builder';

const myObj = RichTextText(params?);
```

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.RichTextText(params?);
```

### Params

`text` – *String* – The text content

### Styling Methods

All styling methods return `this`, enabling chaining.

```javascript
RichTextTextBuilder.bold();
```

Makes the text bold.

```javascript
RichTextTextBuilder.italic();
```

Makes the text italic.

```javascript
RichTextTextBuilder.strike();
```

Adds strikethrough to the text.

```javascript
RichTextTextBuilder.code();
```

Formats the text as inline code.

### Example

```javascript
import { RichTextText } from 'slack-block-builder';

RichTextText({ text: 'Important message' }).bold().italic();
```

### Other Methods

```javascript
RichTextTextBuilder.end();
```

Performs no alterations to the object on which it is called.
