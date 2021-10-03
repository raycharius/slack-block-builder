# Time Picker

?> **Note:** This document is a reference to the `TimePickerBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Time Picker docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#timepicker) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `TimePickerBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { TimePicker } from 'slack-block-builder';

const myObj = TimePicker(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.TimePicker(params?);
```

### Params

Each instance of the `TimePickerBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`actionId` – *String*

`initialTime` – *String*

`placeholder` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `TimePickerBuilder` on which it is called.

```javascript
TimePickerBuilder.actionId(string);
```

Sets a string to be an identifier for the action taken by the user. It is sent back to your app in the interaction payload when the element is interacted or when the view is submitted. 
```javascript
TimePickerBuilder.confirm(ConfirmationDialog);
```

For confirmation dialogs, sets the text of the button that confirms the action to which the confirmation dialog has been added. For elements, adds a confirmation dialog that is displayed when the user interacts with the element to confirm the selection or action. 
```javascript
TimePickerBuilder.initialTime(string);
```

Pre-populates the time picker with a selected, default time. 
```javascript
TimePickerBuilder.placeholder(string);
```

Defines the text displayed as a placeholder in the empty input element. 

### Other Methods

The `TimePickerBuilder` object also has other methods available:

```javascript
TimePickerBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
