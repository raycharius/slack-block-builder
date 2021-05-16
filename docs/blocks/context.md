# Context

?> **Note:** This document is a reference to the `ContextBuilder` object in **Block Builder**. For information on the business logic for the **Context** in the context of the Slack Block Kit framework, visit [the Context docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;blocks#context) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `ContextBuilder` is available as both a top-level import and as a member of its 'category', `Blocks`:

```javascript
import { Context } from 'slack-block-builder';

const myObj = Context(params?);

```

```javascript
import { Blocks } from 'slack-block-builder';

const myObj = Blocks.Context(params?);
```

### Params

Each instance of the `ContextBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`blockId` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `ContextBuilder` on which it is called.

```javascript
ContextBuilder.elements([Element1[, ...[, ElementN]]);
```

Adds elements to the actions block. 
```javascript
ContextBuilder.blockId(string);
```

Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process. 

### Other Methods

The `ContextBuilder` object also has other methods available:

```javascript
ContextBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
