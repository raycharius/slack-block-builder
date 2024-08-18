# Workflow

?> **Note:** This document is a reference to the `WorkflowBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Workflow docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;composition-objects#workflow) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `WorkflowBuilder` is available as both a top-level import and as a member of its 'category', `Bits`:

```javascript
import { Workflow } from 'slack-block-builder';

const myObj = Workflow(params?);

```

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.Workflow(params?);
```

### Params

Each instance of the `WorkflowBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`trigger` – *TriggerObject*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `WorkflowBuilder` on which it is called.

```javascript
WorkflowBuilder.trigger(TriggerObject);
```

A trigger object that contains information about a workflow's trigger. 

### Other Methods

The `WorkflowBuilder` object also has other methods available:

```javascript
WorkflowBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
