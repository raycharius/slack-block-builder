# Static Multi-Select

?> **Note:** This document is a reference to the `StaticMultiSelectBuilder` object in **Block Builder**. For information on the business logic for the **Static Multi-Select** in the context of the Slack Block Kit framework, visit [the Static Multi-Select docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#static_multi_select) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `StaticMultiSelectBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { StaticMultiSelect } from 'slack-block-builder';

const myObj = StaticMultiSelect(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.StaticMultiSelect(params?);
```

### Params

Each instance of the `StaticMultiSelectBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`actionId` – *String*

`maxSelectedItems` – *Int*

`placeholder` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `StaticMultiSelectBuilder` on which it is called.

```javascript
StaticMultiSelectBuilder.initialOptions([Option1[, ...[, OptionN]]);
```

Pre-populates the menu or checkbox input with selected, default options. 
```javascript
StaticMultiSelectBuilder.optionGroups([OptionGroup1[, ...[, OptionGroupN]]);
```

Adds organized groups of options to the select or multi-select menu, each with its own label or title. 
```javascript
StaticMultiSelectBuilder.options([Option1[, ...[, OptionN]]);
```

Adds options to the select or multi-select menu. 
```javascript
StaticMultiSelectBuilder.actionId(string);
```

Sets a string to be an identifier for the action taken by the user. It is sent back to your app in the interaction payload when the element is interacted or when the view is submitted. 
```javascript
StaticMultiSelectBuilder.confirm(ConfirmationDialog);
```

For confirmation dialogs, sets the text of the button that confirms the action to which the confirmation dialog has been added. For elements, adds a confirmation dialog that is displayed when the user interacts with the element to confirm the selection or action. 
```javascript
StaticMultiSelectBuilder.maxSelectedItems(int);
```

Sets a limit to how many items the user can select in the multi-select menu. 
```javascript
StaticMultiSelectBuilder.placeholder(string);
```

Defines the text displayed as a placeholder in the empty input element. 

### Other Methods

The `StaticMultiSelectBuilder` object also has other methods available:

```javascript
StaticMultiSelectBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
