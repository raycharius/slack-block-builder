# Rich Text

?> **Note:** This document is a reference to the `RichTextBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Rich Text docs](https://docs.slack.dev/reference/block-kit/blocks#rich_text) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `RichTextBuilder` is available as both a top-level import and as a member of its 'category', `Blocks`:

```javascript
import { RichText } from 'slack-block-builder';

const myObj = RichText(params?);

```

```javascript
import { Blocks } from 'slack-block-builder';

const myObj = Blocks.RichText(params?);
```

### Params

Each instance of the `RichTextBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`blockId` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `RichTextBuilder` on which it is called.

```javascript
RichTextBuilder.blockId(string);
```

Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and v iew submissions for your app to process. 

```javascript
RichTextBuilder.elements(...elements);
```

Adds rich text elements to the block. Accepts `RichTextSection`, `RichTextList`, `RichTextQuote`, and `RichTextPreformatted` builders.

!> **Warning:** When using `RichText` elements inside a `Table` block, only `RichTextSection` is supported. `RichTextList`, `RichTextQuote`, and `RichTextPreformatted` cannot be used in table cells.

### Example Usage

```javascript
import { RichText, RichTextSection, RichTextText, RichTextEmoji, RichTextList } from 'slack-block-builder';

const block = RichText()
  .elements(
    RichTextSection()
      .elements(
        RichTextText({ text: 'Hello ' }).bold(),
        RichTextEmoji({ name: 'wave' }),
        RichTextText({ text: ' Welcome to the team!' })
      ),
    RichTextList({ style: 'bullet' })
      .elements(
        RichTextSection()
          .elements(RichTextText({ text: 'First item' })),
        RichTextSection()
          .elements(RichTextText({ text: 'Second item' }))
      )
  )
  .buildToJSON();
```

### Other Methods

The `RichTextBuilder` object also has other methods available:

```javascript
RichTextBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
