# Conversation Multi-Select

?> **Note:** This document is a reference to the `ConversationMultiSelectBuilder` object in **Block Builder**. For information on the business logic for the **Conversation Multi-Select** in the context of the Slack Block Kit framework, visit [the Conversation Multi-Select docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#conversation_multi_select) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `ConversationMultiSelectBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { ConversationMultiSelect } from 'slack-block-builder';

const myObj = ConversationMultiSelect(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.ConversationMultiSelect(params?);
```

### Params

Each instance of the `ConversationMultiSelectBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`actionId` – *String*

`maxSelectedItems` – *String*

`placeholder` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `ConversationMultiSelectBuilder` on which it is called.

```javascript
ConversationMultiSelectBuilder.filter([string1[, ...[, stringN]]);
```

Defines which conversations should be included in the list. 
```javascript
ConversationMultiSelectBuilder.initialConversations([string1[, ...[, stringN]]);
```

Pre-populates the menu with selected, default conversations. 
```javascript
ConversationMultiSelectBuilder.defaultToCurrentConversation(boolean?);
```

Pre-populates the select menu with the conversation that the user was viewing when they opened the modal, if available. Defaults to `true`.
```javascript
ConversationMultiSelectBuilder.excludeExternalSharedChannels(boolean?);
```

Excludes conversations shared with external organizations from the menu's options. Defaults to `true`.
```javascript
ConversationMultiSelectBuilder.excludeBotUsers(boolean?);
```

Excludes conversations with bot users from the menu's options. Defaults to `true`.
```javascript
ConversationMultiSelectBuilder.actionId(string);
```

Sets a string to be an identifier for the action taken by the user. It is sent back to your app in the interaction payload when the element is interacted or when the view is submitted. 
```javascript
ConversationMultiSelectBuilder.confirm(ConfirmationDialog);
```

For confirmation dialogs, sets the text of the button that confirms the action to which the confirmation dialog has been added. For elements, adds a confirmation dialog that is displayed when the user interacts with the element to confirm the selection or action. 
```javascript
ConversationMultiSelectBuilder.maxSelectedItems(int);
```

Sets a limit to how many items the user can select in the multi-select menu. 
```javascript
ConversationMultiSelectBuilder.placeholder(string);
```

Defines the text displayed as a placeholder in the empty input element. 

### Other Methods

The `ConversationMultiSelectBuilder` object also has other methods available:

```javascript
ConversationMultiSelectBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
