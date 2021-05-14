# Radio Buttons

?> **Note:** This document is a reference to the `RadioButtonsBuilder` object in **Block Builder**. For information on the business logic for the **Radio Buttons** in the context of the Slack Block Kit framework, visit [the Radio Buttons docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#radio) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `RadioButtonsBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { RadioButtons } from 'slack-block-builder';

const myObj = RadioButtons(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.RadioButtons(params?);
```

### Params

Each instance of the `RadioButtonsBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`actionId` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `RadioButtonsBuilder` on which it is called.

```javascript
RadioButtonsBuilder.options([Option1[, ...[, OptionN]]);
```

Adds options to the select or multi-select menu. 
```javascript
RadioButtonsBuilder.actionId(string);
```

Sets a string to be an identifier for the action taken by the user. It is sent back to your app in the interaction payload when the element is interacted or when the view is submitted. 
```javascript
RadioButtonsBuilder.confirm(ConfirmationDialog);
```

For confirmation dialogs, sets the text of the button that confirms the action to which the confirmation dialog has been added. For elements, adds a confirmation dialog that is displayed when the user interacts with the element to confirm the selection or action. 
```javascript
RadioButtonsBuilder.initialOption(Option);
```

Pre-populates the menu or date picker with a selected, default option. 

### Other Methods

The `RadioButtonsBuilder` object also has other methods available:

```javascript
RadioButtonsBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
