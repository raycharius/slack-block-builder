# Rich Text Date

?> **Note:** This document is a reference to the `RichTextDateBuilder` object in **Block Builder**. For creating formatted date/time elements in rich text.

### Creating an Instance 

```javascript
import { RichTextDate } from 'slack-block-builder';

const myObj = RichTextDate(params?);
```

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.RichTextDate(params?);
```

### Params

`timestamp` – *Number* – Unix timestamp in seconds

`format` – *String* – Date format template (e.g., `'{date_long}'`, `'{time}'`)

`url` – *String* – Optional URL to link the date

`fallback` – *String* – Fallback text if date can't be displayed

### Available Format Tokens

- `{date_num}` – YYYY-MM-DD
- `{date_short}` – Aug 9, 2020
- `{date_long}` – Monday, December 23rd, 2013
- `{date}` – Same as date_long_full without year
- `{time}` – Time of day (12 or 24 hour)
- `{ago}` – e.g., "3 minutes ago"

### Styling Methods

```javascript
RichTextDateBuilder.bold();
RichTextDateBuilder.italic();
RichTextDateBuilder.strike();
RichTextDateBuilder.code();
```

### Example

```javascript
import { RichTextDate } from 'slack-block-builder';

RichTextDate({ 
  timestamp: 1628633820, 
  format: '{date_long} at {time}' 
});
```

### Other Methods

```javascript
RichTextDateBuilder.end();
```
