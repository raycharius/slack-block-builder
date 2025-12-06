# Icon Button

?> **Note:** This document is a reference to the `IconButtonBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Icon Button docs](https://docs.slack.dev/reference/block-kit/block-elements#icon_button) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `IconButtonBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { IconButton } from 'slack-block-builder';

const myObj = IconButton(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.IconButton(params?);
```

### Params

Each instance of the `IconButtonBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`accessibilityLabel` – *String*

`actionId` – *String*

`icon` – *String*

`text` – *String*

`value` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `IconButtonBuilder` on which it is called.

```javascript
IconButtonBuilder.actionId(string);
```

Sets a string to be an identifier for the source of an action in interaction payloads.

```javascript
IconButtonBuilder.icon(string);
```

Sets the icon to display on the button (e.g., 'trash', 'edit').

```javascript
IconButtonBuilder.text(string);
```

Sets the text for the button (used for accessibility).

```javascript
IconButtonBuilder.value(string);
```

Sets the value to be passed to your app when this button is clicked.

```javascript
IconButtonBuilder.accessibilityLabel(string);
```

Sets a longer descriptive text that will be read out by screen readers.

```javascript
IconButtonBuilder.visibleToUserIds(...userIds);
```

Sets user IDs for which the icon button appears.

```javascript
IconButtonBuilder.confirm(ConfirmationDialogBuilder);
```

Sets a confirmation dialog to be shown before the action is executed.

### Other Methods

The `IconButtonBuilder` object also has other methods available:

```javascript
IconButtonBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
