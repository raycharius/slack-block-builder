# Table

?> **Note:** This document is a reference to the `TableBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Table docs](https://docs.slack.dev/reference/block-kit/blocks#table) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `TableBuilder` is available as both a top-level import and as a member of its 'category', `Blocks`:

```javascript
import { Table } from 'slack-block-builder';

const myObj = Table(params?);

```

```javascript
import { Blocks } from 'slack-block-builder';

const myObj = Blocks.Table(params?);
```

### Params

Each instance of the `TableBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`blockId` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `TableBuilder` on which it is called.

```javascript
TableBuilder.blockId(string);
```

Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process. 

```javascript
TableBuilder.rows(array);
```

TableBuilder.rows(array);
```

Sets the table rows. Each row is an array of cells containing `rich_text` or raw text objects.

?> **Note:** To simplify usage, you can pass plain strings or simple text objects (e.g., `{ type: 'text', text: '...' }`) and **Block Builder** will automatically wrap them in the required `RichText` -> `RichTextSection` -> `RichTextText` structure.

!> **Warning:** Table cells only support `RichTextSection`. You cannot use `RichTextList`, `RichTextQuote`, or `RichTextPreformatted` inside a table cell. The builder will throw an error if you attempt to do so.

```javascript
TableBuilder.columnSettings(array);
```

Sets column behavior settings. Each item can have `align` ('left', 'center', 'right') and `is_wrapped` (boolean) properties.

### Other Methods

The `TableBuilder` object also has other methods available:

```javascript
TableBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
