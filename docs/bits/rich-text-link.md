# Rich Text Link

?> **Note:** This document is a reference to the `RichTextLinkBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [Rich Text Block docs](https://docs.slack.dev/reference/block-kit/blocks#element-types) on Slack's doc site.

### Creating an Instance 

```javascript
import { RichTextLink } from 'slack-block-builder';

const myObj = RichTextLink(params?);
```

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.RichTextLink(params?);
```

### Params

`url` – *String* – The URL to link to

`text` – *String* – The display text for the link

`unsafe` – *Boolean* – Whether the link is unsafe

### Styling Methods

```javascript
RichTextLinkBuilder.bold();
RichTextLinkBuilder.italic();
RichTextLinkBuilder.strike();
RichTextLinkBuilder.code();
```

### Example

```javascript
import { RichTextLink } from 'slack-block-builder';

RichTextLink({ url: 'https://example.com', text: 'Click here' }).bold();
```

### Other Methods

```javascript
RichTextLinkBuilder.end();
```
