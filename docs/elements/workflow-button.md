# WorkflowButton

?> **Note:** This document is a reference to the `WorkflowButtonBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the WorkflowButton docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#workflow_button) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `WorkflowButtonBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { WorkflowButton } from 'slack-block-builder';

const myObj = WorkflowButton(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.WorkflowButton(params?);
```

### Params

Each instance of the `WorkflowButtonBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`accessibilityLabel` – *String*

`actionId` – *String*

`text` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `WorkflowButtonBuilder` on which it is called.

```javascript
WorkflowButtonBuilder.danger(boolean?);
```

For a button element, this changes the color to red. For confirmation dialogs, this sets the main button in the bottom right corner to red, indicating that an action is potentially destructive. Defaults to `true`.
```javascript
WorkflowButtonBuilder.primary(boolean?);
```

For a button element, this changes the color to green. For confirmation dialogs, this sets the main button in the bottom right corner to green, which is meant to confirm the action. Defaults to `true`.
```javascript
WorkflowButtonBuilder.accessibilityLabel(string);
```

A label for longer descriptive text about a button element. This label will be read out by screen readers instead of the button text object. 
```javascript
WorkflowButtonBuilder.actionId(string);
```

Sets a string to be an identifier for the action taken by the user. It is sent back to your app in the interaction payload when the element is interacted or when the view is submitted. 
```javascript
WorkflowButtonBuilder.text(string);
```

Sets the text displayed for buttons, headers, confirmation dialogs, sections, context blocks, and options. 
```javascript
WorkflowButtonBuilder.workflow(Workflow);
```

Sets a workflow object that contains details about the workflow that will run when the button is clicked. 

### Other Methods

The `WorkflowButtonBuilder` object also has other methods available:

```javascript
WorkflowButtonBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
