# Checkboxes

?> **Note:** This document is a reference to the `CheckboxesBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Checkboxes docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#checkboxes) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `CheckboxesBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { Checkboxes } from 'slack-block-builder';

const myObj = Checkboxes(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.Checkboxes(params?);
```

### Params

Each instance of the `CheckboxesBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`actionId` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `CheckboxesBuilder` on which it is called.

```javascript
CheckboxesBuilder.initialOptions([Option1[, ...[, OptionN]]);
```

Pre-populates the menu or checkbox input with selected, default options. 
```javascript
CheckboxesBuilder.options([Option1[, ...[, OptionN]]);
```

Adds options to the select or multi-select menu. 
```javascript
CheckboxesBuilder.actionId(string);
```

Sets a string to be an identifier for the action taken by the user. It is sent back to your app in the interaction payload when the element is interacted or when the view is submitted. 
```javascript
CheckboxesBuilder.confirm(ConfirmationDialog);
```

For confirmation dialogs, sets the text of the button that confirms the action to which the confirmation dialog has been added. For elements, adds a confirmation dialog that is displayed when the user interacts with the element to confirm the selection or action. 

### Other Methods

The `CheckboxesBuilder` object also has other methods available:

```javascript
CheckboxesBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
