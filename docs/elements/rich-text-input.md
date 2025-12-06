# Rich Text Input

?> **Note:** This document is a reference to the `RichTextInputBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Rich Text Input docs](https://docs.slack.dev/reference/block-kit/block-elements#rich_text_input) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `RichTextInputBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { RichTextInput } from 'slack-block-builder';

const myObj = RichTextInput(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.RichTextInput(params?);
```

### Params

Each instance of the `RichTextInputBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`actionId` – *String*

`placeholder` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `RichTextInputBuilder` on which it is called.

```javascript
RichTextInputBuilder.actionId(string);
```

Sets a string to be an identifier for the source of an action in interaction payloads.

```javascript
RichTextInputBuilder.placeholder(string);
```

Sets placeholder text displayed in the input when empty.

```javascript
RichTextInputBuilder.initialValue(RichTextBuilder);
```

Sets the initial value for the rich text input using a RichText block builder.

```javascript
RichTextInputBuilder.focusOnLoad(boolean?);
```

Sets the element to have auto focus on opening the view. Defaults to true if called without argument.

```javascript
RichTextInputBuilder.dispatchActionConfig(config);
```

Configures when to dispatch actions for this input. Config object has `trigger_actions_on` array with values like 'on_enter_pressed' or 'on_character_entered'.

### Other Methods

The `RichTextInputBuilder` object also has other methods available:

```javascript
RichTextInputBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
