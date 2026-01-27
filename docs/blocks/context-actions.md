# Context Actions

?> **Note:** This document is a reference to the `ContextActionsBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Context Actions docs](https://docs.slack.dev/reference/block-kit/blocks#context_actions) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `ContextActionsBuilder` is available as both a top-level import and as a member of its 'category', `Blocks`:

```javascript
import { ContextActions } from 'slack-block-builder';

const myObj = ContextActions(params?);

```

```javascript
import { Blocks } from 'slack-block-builder';

const myObj = Blocks.ContextActions(params?);
```

### Params

Each instance of the `ContextActionsBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`blockId` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `ContextActionsBuilder` on which it is called.

```javascript
ContextActionsBuilder.blockId(string);
```

Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process. 

```javascript
ContextActionsBuilder.elements(...elements);
```

Adds elements to the context actions block. Accepts FeedbackButtons or IconButton elements.

### Other Methods

The `ContextActionsBuilder` object also has other methods available:

```javascript
ContextActionsBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
