# File

?> **Note:** This document is a reference to the `FileBuilder` object in **Block Builder**. For information on the business logic for the **File** in the context of the Slack Block Kit framework, visit [the File docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;blocks#file) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `FileBuilder` is available as both a top-level import and as a member of its 'category', `Blocks`:

```javascript
import { File } from 'slack-block-builder';

const myObj = File(params?);

```

```javascript
import { Blocks } from 'slack-block-builder';

const myObj = Blocks.File(params?);
```

### Params

Each instance of the `FileBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`blockId` – *String*

`externalId` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `FileBuilder` on which it is called.

```javascript
FileBuilder.blockId(string);
```

Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process. 
```javascript
FileBuilder.externalId(string);
```

Sets a custom identifier for a view or file that must be unique for all views on a per-team basis. 

### Other Methods

The `FileBuilder` object also has other methods available:

```javascript
FileBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
