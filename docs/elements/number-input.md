# Email Input

?> **Note:** This document is a reference to the `NumberInputBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Email Input docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#number) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `NumberInputBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { NumberInput } from 'slack-block-builder';

const myObj = NumberInput(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.NumberInput(params?);
```

### Params

Each instance of the `NumberInputBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`actionId` – *String*

`initialValue` – *Int*

`isDecimalAllowed` – *boolean*

`minValue` – *Int*

`maxValue` – *Int*

`placeholder` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `NumberInputBuilder` on which it is called.

```javascript
NumberInputBuilder.dispatchActionOnCharacterEntered(boolean?);
```

Instructs the Slack API to dispatch an interaction payload to your app when the user enters or deletes a character in the input. Defaults to `true`.
```javascript
NumberInputBuilder.dispatchActionOnEnterPressed(boolean?);
```

Instructs the Slack API to dispatch an interaction payload to your app when the user presses the enter key while the input is in focus. Defaults to `true`.
```javascript
NumberInputBuilder.focusOnLoad(boolean?);
```

Sets an element to have auto focus on opening the view Defaults to `true`.
```javascript
NumberInputBuilder.actionId(string);
```

Sets a string to be an identifier for the action taken by the user. It is sent back to your app in the interaction payload when the element is interacted or when the view is submitted. 
```javascript
NumberInputBuilder.initialValue(string);
```

Pre-populates the input with a default value. 
```javascript
NumberInputBuilder.isDecimalAllowed(boolean);
```

Dicates whether a decimal is allowed for the value entered into the number input. 
```javascript
NumberInputBuilder.maxValue(int);
```

Sets a maximum value for the number input. 
```javascript
NumberInputBuilder.minValue(int);
```

Sets a minimum value for the number input. 
```javascript
NumberInputBuilder.placeholder(string);
```

Defines the text displayed as a placeholder in the empty input element. 

### Other Methods

The `NumberInputBuilder` object also has other methods available:

```javascript
NumberInputBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
