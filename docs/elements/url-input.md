# URL Input

?> **Note:** This document is a reference to the `URLInputBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the URL Input docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#url) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `URLInputBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { URLInput } from 'slack-block-builder';

const myObj = URLInput(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.URLInput(params?);
```

### Params

Each instance of the `URLInputBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`actionId` – *String*

`initialValue` – *String*

`placeholder` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `URLInputBuilder` on which it is called.

```javascript
URLInputBuilder.dispatchActionOnCharacterEntered(boolean?);
```

Instructs the Slack API to dispatch an interaction payload to your app when the user enters or deletes a character in the input. Defaults to `true`.
```javascript
URLInputBuilder.dispatchActionOnEnterPressed(boolean?);
```

Instructs the Slack API to dispatch an interaction payload to your app when the user presses the enter key while the input is in focus. Defaults to `true`.
```javascript
URLInputBuilder.focusOnLoad(boolean?);
```

Sets an element to have auto focus on opening the view Defaults to `true`.
```javascript
URLInputBuilder.actionId(string);
```

Sets a string to be an identifier for the action taken by the user. It is sent back to your app in the interaction payload when the element is interacted or when the view is submitted. 
```javascript
URLInputBuilder.initialValue(string);
```

Pre-populates the input with a default value. 
```javascript
URLInputBuilder.placeholder(string);
```

Defines the text displayed as a placeholder in the empty input element. 

### Other Methods

The `URLInputBuilder` object also has other methods available:

```javascript
URLInputBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
