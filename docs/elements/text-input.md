# Plain-Text Input

?> **Note:** This document is a reference to the `TextInputBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Plain-Text Input docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#input) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `TextInputBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { TextInput } from 'slack-block-builder';

const myObj = TextInput(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.TextInput(params?);
```

### Params

Each instance of the `TextInputBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`actionId` – *String*

`initialValue` – *String*

`multiline` – *boolean*

`maxLength` – *Int*

`minLength` – *Int*

`placeholder` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `TextInputBuilder` on which it is called.

```javascript
TextInputBuilder.dispatchActionOnCharacterEntered(boolean?);
```

Instructs the Slack API to dispatch an interaction payload to your app when the user enters or deletes a character in the input. Defaults to `true`.
```javascript
TextInputBuilder.dispatchActionOnEnterPressed(boolean?);
```

Instructs the Slack API to dispatch an interaction payload to your app when the user presses the enter key while the input is in focus. Defaults to `true`.
```javascript
TextInputBuilder.focusOnLoad(boolean?);
```

Sets an element to have auto focus on opening the view Defaults to `true`.
```javascript
TextInputBuilder.multiline(boolean?);
```

Sets the text input to be a larger, multi-line input for larger portions of text. Defaults to `true`.
```javascript
TextInputBuilder.actionId(string);
```

Sets a string to be an identifier for the action taken by the user. It is sent back to your app in the interaction payload when the element is interacted or when the view is submitted. 
```javascript
TextInputBuilder.initialValue(string);
```

Pre-populates the input with a default value. 
```javascript
TextInputBuilder.maxLength(int);
```

Sets a maximum character count allowed in the given text input. 
```javascript
TextInputBuilder.minLength(int);
```

Sets a minimum character count required for the given text input before the user can submit the view. 
```javascript
TextInputBuilder.placeholder(string);
```

Defines the text displayed as a placeholder in the empty input element. 

### Other Methods

The `TextInputBuilder` object also has other methods available:

```javascript
TextInputBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
