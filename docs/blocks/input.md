# Input

?> **Note:** This document is a reference to the `InputBuilder` object in **Block Builder**. For information on the business logic for the **Input** in the context of the Slack Block Kit framework, visit [the Input docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;blocks#input) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `InputBuilder` is available as both a top-level import and as a member of its 'category', `Blocks`:

```javascript
import { Input } from 'slack-block-builder';

const myObj = Input(params?);

```

```javascript
import { Blocks } from 'slack-block-builder';

const myObj = Blocks.Input(params?);
```

### Params

Each instance of the `InputBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`blockId` – *String*

`hint` – *String*

`label` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `InputBuilder` on which it is called.

```javascript
InputBuilder.dispatchAction(boolean?);
```

Instructs the Slack API to send an interaction event to your app when the element in the input block has been interacted with. Defaults to `true`.
```javascript
InputBuilder.optional(boolean?);
```

Lets the Slack API know that inputting data in the the input is not required for the view to be successfully submitted. Defaults to `true`.
```javascript
InputBuilder.blockId(string);
```

Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process. 
```javascript
InputBuilder.element(Element);
```

Adds a user input element to the input block for gathering information from the user. 
```javascript
InputBuilder.hint(string);
```

Adds a hint below the input block to provide users with more context or instructions for using the input. 
```javascript
InputBuilder.label(string);
```

For input blocks, this sets the text displayed in the label for the input. For an option group, it defines the text displayed as a title for the group. 

### Other Methods

The `InputBuilder` object also has other methods available:

```javascript
InputBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
