# Confirmation Dialog

?> **Note:** This document is a reference to the `ConfirmationDialogBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Confirmation Dialog docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;composition-objects#confirm) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `ConfirmationDialogBuilder` is available as both a top-level import and as a member of its 'category', `Bits`:

```javascript
import { ConfirmationDialog } from 'slack-block-builder';

const myObj = ConfirmationDialog(params?);

```

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.ConfirmationDialog(params?);
```

### Params

Each instance of the `ConfirmationDialogBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`confirm` – *String*

`deny` – *String*

`text` – *String*

`title` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `ConfirmationDialogBuilder` on which it is called.

```javascript
ConfirmationDialogBuilder.danger(boolean?);
```

For a button element, this changes the color to red. For confirmation dialogs, this sets the main button in the bottom right corner to red, indicating that an action is potentially destructive. Defaults to `true`.
```javascript
ConfirmationDialogBuilder.primary(boolean?);
```

For a button element, this changes the color to green. For confirmation dialogs, this sets the main button in the bottom right corner to green, which is meant to confirm the action. Defaults to `true`.
```javascript
ConfirmationDialogBuilder.confirm(ConfirmationDialog);
```

For confirmation dialogs, sets the text of the button that confirms the action to which the confirmation dialog has been added. For elements, adds a confirmation dialog that is displayed when the user interacts with the element to confirm the selection or action. 
```javascript
ConfirmationDialogBuilder.deny(string);
```

Sets the text of the button that is meant to cancel the action or which the confirmation dialog was called. 
```javascript
ConfirmationDialogBuilder.text(string);
```

Sets the text displayed for buttons, headers, confirmation dialogs, sections, context blocks, and options. 
```javascript
ConfirmationDialogBuilder.title(string);
```

Sets the title displayed for the block, element, or confirmation dialog. 

### Other Methods

The `ConfirmationDialogBuilder` object also has other methods available:

```javascript
ConfirmationDialogBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
