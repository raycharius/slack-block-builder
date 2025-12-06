# Rich Text Color

?> **Note:** This document is a reference to the `RichTextColorBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Rich Text element docs](https://docs.slack.dev/reference/block-kit/blocks#element-types) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `RichTextColorBuilder` is available as both a top-level import and as a member of its 'category', `Bits`:

```javascript
import { RichTextColor } from 'slack-block-builder';

const myObj = RichTextColor(params?);

```

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.RichTextColor(params?);
```

### Params

Each instance of the `RichTextColorBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`value` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `RichTextColorBuilder` on which it is called.

```javascript
RichTextColorBuilder.value(string);
```

Sets the hex color value (e.g., '#FF5733').

```javascript
RichTextColorBuilder.bold();
```

Makes the color text bold.

```javascript
RichTextColorBuilder.italic();
```

Makes the color text italic.

```javascript
RichTextColorBuilder.strike();
```

Adds strikethrough to the color text.

```javascript
RichTextColorBuilder.code();
```

Formats the color text as inline code.

### Other Methods

The `RichTextColorBuilder` object also has other methods available:

```javascript
RichTextColorBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
