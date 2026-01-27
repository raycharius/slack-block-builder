# Markdown

?> **Note:** This document is a reference to the `MarkdownBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Markdown docs](https://docs.slack.dev/reference/block-kit/blocks#markdown) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `MarkdownBuilder` is available as both a top-level import and as a member of its 'category', `Blocks`:

```javascript
import { Markdown } from 'slack-block-builder';

const myObj = Markdown(params?);

```

```javascript
import { Blocks } from 'slack-block-builder';

const myObj = Blocks.Markdown(params?);
```

### Params

Each instance of the `MarkdownBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`blockId` – *String*

`text` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `MarkdownBuilder` on which it is called.

```javascript
MarkdownBuilder.blockId(string);
```

Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process. 

```javascript
MarkdownBuilder.text(string);
```

Sets the markdown text content. Standard markdown is supported and will be translated by Slack. Maximum of 12,000 characters.

### Other Methods

The `MarkdownBuilder` object also has other methods available:

```javascript
MarkdownBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
