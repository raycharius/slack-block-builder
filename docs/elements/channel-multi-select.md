# Channel Multi-Select

?> **Note:** This document is a reference to the `ChannelMultiSelectBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Channel Multi-Select docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#channel_multi_select) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `ChannelMultiSelectBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { ChannelMultiSelect } from 'slack-block-builder';

const myObj = ChannelMultiSelect(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.ChannelMultiSelect(params?);
```

### Params

Each instance of the `ChannelMultiSelectBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`actionId` – *String*

`maxSelectedItems` – *Int*

`placeholder` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `ChannelMultiSelectBuilder` on which it is called.

```javascript
ChannelMultiSelectBuilder.initialChannels([string1[, ...[, stringN]]);
```

Pre-populates the menu with selected, default channels. 
```javascript
ChannelMultiSelectBuilder.focusOnLoad(boolean?);
```

Sets an element to have auto focus on opening the view Defaults to `true`.
```javascript
ChannelMultiSelectBuilder.actionId(string);
```

Sets a string to be an identifier for the action taken by the user. It is sent back to your app in the interaction payload when the element is interacted or when the view is submitted. 
```javascript
ChannelMultiSelectBuilder.confirm(ConfirmationDialog);
```

For confirmation dialogs, sets the text of the button that confirms the action to which the confirmation dialog has been added. For elements, adds a confirmation dialog that is displayed when the user interacts with the element to confirm the selection or action. 
```javascript
ChannelMultiSelectBuilder.maxSelectedItems(int);
```

Sets a limit to how many items the user can select in the multi-select menu. 
```javascript
ChannelMultiSelectBuilder.placeholder(string);
```

Defines the text displayed as a placeholder in the empty input element. 

### Other Methods

The `ChannelMultiSelectBuilder` object also has other methods available:

```javascript
ChannelMultiSelectBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
