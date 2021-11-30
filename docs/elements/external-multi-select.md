# External Multi-Select

?> **Note:** This document is a reference to the `ExternalMultiSelectBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the External Multi-Select docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#external_multi_select) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `ExternalMultiSelectBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { ExternalMultiSelect } from 'slack-block-builder';

const myObj = ExternalMultiSelect(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.ExternalMultiSelect(params?);
```

### Params

Each instance of the `ExternalMultiSelectBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`actionId` – *String*

`maxSelectedItems` – *Int*

`minQueryLength` – *Int*

`placeholder` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `ExternalMultiSelectBuilder` on which it is called.

```javascript
ExternalMultiSelectBuilder.initialOptions([Option1[, ...[, OptionN]]);
```

Pre-populates the menu or checkbox input with selected, default options. 
```javascript
ExternalMultiSelectBuilder.focusOnLoad(boolean?);
```

Sets an element to have auto focus on opening the view Defaults to `true`.
```javascript
ExternalMultiSelectBuilder.actionId(string);
```

Sets a string to be an identifier for the action taken by the user. It is sent back to your app in the interaction payload when the element is interacted or when the view is submitted. 
```javascript
ExternalMultiSelectBuilder.confirm(ConfirmationDialog);
```

For confirmation dialogs, sets the text of the button that confirms the action to which the confirmation dialog has been added. For elements, adds a confirmation dialog that is displayed when the user interacts with the element to confirm the selection or action. 
```javascript
ExternalMultiSelectBuilder.maxSelectedItems(int);
```

Sets a limit to how many items the user can select in the multi-select menu. 
```javascript
ExternalMultiSelectBuilder.minQueryLength(int);
```

Sets a minimum number of characters required before Slack queries your app for a list of options. 
```javascript
ExternalMultiSelectBuilder.placeholder(string);
```

Defines the text displayed as a placeholder in the empty input element. 

### Other Methods

The `ExternalMultiSelectBuilder` object also has other methods available:

```javascript
ExternalMultiSelectBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
