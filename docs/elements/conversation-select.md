# Conversation Select

?> **Note:** This document is a reference to the `ConversationSelectBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Conversation Select docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#conversation_select) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `ConversationSelectBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { ConversationSelect } from 'slack-block-builder';

const myObj = ConversationSelect(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.ConversationSelect(params?);
```

### Params

Each instance of the `ConversationSelectBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`actionId` – *String*

`maxSelectedItems` – *String*

`placeholder` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `ConversationSelectBuilder` on which it is called.

```javascript
ConversationSelectBuilder.filter([string1[, ...[, stringN]]);
```

Defines which conversations should be included in the list. 
```javascript
ConversationSelectBuilder.defaultToCurrentConversation(boolean?);
```

Pre-populates the select menu with the conversation that the user was viewing when they opened the modal, if available. Defaults to `true`.
```javascript
ConversationSelectBuilder.excludeExternalSharedChannels(boolean?);
```

Excludes conversations shared with external organizations from the menu's options. Defaults to `true`.
```javascript
ConversationSelectBuilder.excludeBotUsers(boolean?);
```

Excludes conversations with bot users from the menu's options. Defaults to `true`.
```javascript
ConversationSelectBuilder.focusOnLoad(boolean?);
```

Sets an element to have auto focus on opening the view Defaults to `true`.
```javascript
ConversationSelectBuilder.responseUrlEnabled(boolean?);
```

Instructs the Slack API to provide a response URL at view submission. Defaults to `true`.
```javascript
ConversationSelectBuilder.actionId(string);
```

Sets a string to be an identifier for the action taken by the user. It is sent back to your app in the interaction payload when the element is interacted or when the view is submitted. 
```javascript
ConversationSelectBuilder.confirm(ConfirmationDialog);
```

For confirmation dialogs, sets the text of the button that confirms the action to which the confirmation dialog has been added. For elements, adds a confirmation dialog that is displayed when the user interacts with the element to confirm the selection or action. 
```javascript
ConversationSelectBuilder.initialConversation(string);
```

Pre-populates the menu with a selected, default conversation. 
```javascript
ConversationSelectBuilder.placeholder(string);
```

Defines the text displayed as a placeholder in the empty input element. 

### Other Methods

The `ConversationSelectBuilder` object also has other methods available:

```javascript
ConversationSelectBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
