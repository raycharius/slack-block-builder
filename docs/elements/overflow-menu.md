# Overflow Menu

?> **Note:** This document is a reference to the `OverflowMenuBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Overflow Menu docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#overflow) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `OverflowMenuBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { OverflowMenu } from 'slack-block-builder';

const myObj = OverflowMenu(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.OverflowMenu(params?);
```

### Params

Each instance of the `OverflowMenuBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`actionId` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `OverflowMenuBuilder` on which it is called.

```javascript
OverflowMenuBuilder.options([Option1[, ...[, OptionN]]);
```

Adds options to the select or multi-select menu. 
```javascript
OverflowMenuBuilder.actionId(string);
```

Sets a string to be an identifier for the action taken by the user. It is sent back to your app in the interaction payload when the element is interacted or when the view is submitted. 
```javascript
OverflowMenuBuilder.confirm(ConfirmationDialog);
```

For confirmation dialogs, sets the text of the button that confirms the action to which the confirmation dialog has been added. For elements, adds a confirmation dialog that is displayed when the user interacts with the element to confirm the selection or action. 

### Other Methods

The `OverflowMenuBuilder` object also has other methods available:

```javascript
OverflowMenuBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
