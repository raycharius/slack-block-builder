# Workflow Button

?> **Note:** This document is a reference to the `WorkflowButtonBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Workflow Button docs](https://docs.slack.dev/reference/block-kit/block-elements#workflow_button) on Slack's doc site.

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

`text` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `WorkflowButtonBuilder` on which it is called.

```javascript
WorkflowButtonBuilder.text(string);
```

Sets the display text for the button.

```javascript
WorkflowButtonBuilder.accessibilityLabel(string);
```

Sets a longer descriptive text that will be read out by screen readers instead of the button text object.

```javascript
WorkflowButtonBuilder.workflow(object);
```

Sets the workflow configuration with a trigger URL and optional customizable input parameters.

```javascript
WorkflowButtonBuilder.confirm(ConfirmationDialogBuilder);
```

Sets a confirmation dialog to be shown before the workflow is triggered.

```javascript
WorkflowButtonBuilder.primary();
```

Sets the button style to primary (green).

```javascript
WorkflowButtonBuilder.danger();
```

Sets the button style to danger (red).

### Other Methods

The `WorkflowButtonBuilder` object also has other methods available:

```javascript
WorkflowButtonBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
