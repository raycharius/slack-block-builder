# Email Input

?> **Note:** This document is a reference to the `EmailInputBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Email Input docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#email) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `EmailInputBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { EmailInput } from 'slack-block-builder';

const myObj = EmailInput(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.EmailInput(params?);
```

### Params

Each instance of the `EmailInputBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`actionId` – *String*

`initialValue` – *String*

`placeholder` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `EmailInputBuilder` on which it is called.

```javascript
EmailInputBuilder.dispatchActionOnCharacterEntered(boolean?);
```

Instructs the Slack API to dispatch an interaction payload to your app when the user enters or deletes a character in the input. Defaults to `true`.
```javascript
EmailInputBuilder.dispatchActionOnEnterPressed(boolean?);
```

Instructs the Slack API to dispatch an interaction payload to your app when the user presses the enter key while the input is in focus. Defaults to `true`.
```javascript
EmailInputBuilder.focusOnLoad(boolean?);
```

Sets an element to have auto focus on opening the view Defaults to `true`.
```javascript
EmailInputBuilder.actionId(string);
```

Sets a string to be an identifier for the action taken by the user. It is sent back to your app in the interaction payload when the element is interacted or when the view is submitted. 
```javascript
EmailInputBuilder.initialValue(string);
```

Pre-populates the input with a default value. 
```javascript
EmailInputBuilder.placeholder(string);
```

Defines the text displayed as a placeholder in the empty input element. 

### Other Methods

The `EmailInputBuilder` object also has other methods available:

```javascript
EmailInputBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
