# Workflow Step

?> **Note:** This document is a reference to the `WorkflowStepBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Workflow Step docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;workflows&#x2F;configuration-view) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `WorkflowStepBuilder` is available as both a top-level import and as a member of its 'category', `Surfaces`:

```javascript
import { WorkflowStep } from 'slack-block-builder';

const myObj = WorkflowStep(params?);

```

```javascript
import { Surfaces } from 'slack-block-builder';

const myObj = Surfaces.WorkflowStep(params?);
```

### Params

Each instance of the `WorkflowStepBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`privateMetaData` – *String*

`callbackId` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `WorkflowStepBuilder` on which it is called.

```javascript
WorkflowStepBuilder.blocks([Block1[, ...[, BlockN]]);
```

Adds blocks to your view or message. 
```javascript
WorkflowStepBuilder.submitDisabled(boolean?);
```

Configures the workflow step to have a disabled submit button until the user has input data into one or more inputs. Defaults to `true`.
```javascript
WorkflowStepBuilder.callbackId(string);
```

Sets a string for your view that is sent back to your server in all of the interaction payloads and view submissions. Used to identify the view from which the interaction payload is generated. 
```javascript
WorkflowStepBuilder.privateMetaData(string);
```

Defines a string sent back to your server with view and interaction payloads. 

### Other Methods

The `WorkflowStepBuilder` object also has other methods available:

```javascript
WorkflowStepBuilder.buildToJSON();
```

Builds the view and returns it as a Slack API-compatible JSON string. 
```javascript
WorkflowStepBuilder.buildToObject();
```

Builds the view and returns it as a Slack API-compatible object. 
```javascript
WorkflowStepBuilder.getBlocks();
```

Builds the view and returns a Slack API-compatible array of blocks. 
```javascript
WorkflowStepBuilder.getPreviewUrl();
```

Builds the view and returns the preview URL in order to open and preview the view on Slack's Block Kit Builder web application. 
```javascript
WorkflowStepBuilder.printPreviewUrl();
```

Calls getPreviewUrl to build the preview URL and log it to the console. 
