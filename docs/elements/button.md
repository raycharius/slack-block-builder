# Button

?> **Note:** This document is a reference to the `ButtonBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Button docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#button) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `ButtonBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { Button } from 'slack-block-builder';

const myObj = Button(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.Button(params?);
```

### Params

Each instance of the `ButtonBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`accessibilityLabel` – *String*

`actionId` – *String*

`text` – *String*

`url` – *String*

`value` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `ButtonBuilder` on which it is called.

```javascript
ButtonBuilder.danger(boolean?);
```

For a button element, this changes the color to red. For confirmation dialogs, this sets the main button in the bottom right corner to red, indicating that an action is potentially destructive. Defaults to `true`.
```javascript
ButtonBuilder.primary(boolean?);
```

For a button element, this changes the color to green. For confirmation dialogs, this sets the main button in the bottom right corner to green, which is meant to confirm the action. Defaults to `true`.
```javascript
ButtonBuilder.accessibilityLabel(string);
```

A label for longer descriptive text about a button element. This label will be read out by screen readers instead of the button text object. 
```javascript
ButtonBuilder.actionId(string);
```

Sets a string to be an identifier for the action taken by the user. It is sent back to your app in the interaction payload when the element is interacted or when the view is submitted. 
```javascript
ButtonBuilder.confirm(ConfirmationDialog);
```

For confirmation dialogs, sets the text of the button that confirms the action to which the confirmation dialog has been added. For elements, adds a confirmation dialog that is displayed when the user interacts with the element to confirm the selection or action. 
```javascript
ButtonBuilder.text(string);
```

Sets the text displayed for buttons, headers, confirmation dialogs, sections, context blocks, and options. 
```javascript
ButtonBuilder.url(string);
```

Sets the URL to which the user is redirected when interacting with a button or option. 
```javascript
ButtonBuilder.value(string);
```

Sets a value to be sent to your app when a user interacts with a button or option. 

### Other Methods

The `ButtonBuilder` object also has other methods available:

```javascript
ButtonBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
