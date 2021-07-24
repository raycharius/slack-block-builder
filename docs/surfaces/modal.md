# Modal

?> **Note:** This document is a reference to the `ModalBuilder` object in **Block Builder**. For information on the business logic for the **Modal** in the context of the Slack Block Kit framework, visit [the Modal docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;surfaces&#x2F;views) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `ModalBuilder` is available as both a top-level import and as a member of its 'category', `Surfaces`:

```javascript
import { Modal } from 'slack-block-builder';

const myObj = Modal(params?);

```

```javascript
import { Surfaces } from 'slack-block-builder';

const myObj = Surfaces.Modal(params?);
```

### Params

Each instance of the `ModalBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`type` – *String*

`title` – *String*

`close` – *String*

`submit` – *String*

`privateMetaData` – *String*

`callbackId` – *String*

`externalId` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `ModalBuilder` on which it is called.

```javascript
ModalBuilder.blocks([Block1[, ...[, BlockN]]);
```

Adds blocks to your view or message. 
```javascript
ModalBuilder.clearOnClose(boolean?);
```

Instructs the Slack API to close all open views in the view stack when this particular view is closed. Defaults to `true`.
```javascript
ModalBuilder.notifyOnClose(boolean?);
```

Instructs the Slack API to send an interaction payload to your app when the view is closed. Defaults to `true`.
```javascript
ModalBuilder.callbackId(string);
```

Sets a string for your view that is sent back to your server in all of the interaction payloads and view submissions. Used to identify the view from which the interaction payload is generated. 
```javascript
ModalBuilder.close(string);
```

Sets the text displayed on the button that closes the view. 
```javascript
ModalBuilder.externalId(string);
```

Sets a custom identifier for a view or file that must be unique for all views on a per-team basis. 
```javascript
ModalBuilder.privateMetaData(string);
```

Defines a string sent back to your server with view and interaction payloads. 
```javascript
ModalBuilder.submit(string);
```

Sets the text displayed on the button that submits the view. 
```javascript
ModalBuilder.title(string);
```

Sets the title displayed for the block, element, or confirmation dialog. 

### Other Methods

The `ModalBuilder` object also has other methods available:

```javascript
ModalBuilder.buildToJSON();
```

Builds the view and returns it as a Slack API-compatible JSON string. 
```javascript
ModalBuilder.buildToObject();
```

Builds the view and returns it as a Slack API-compatible object. 
```javascript
ModalBuilder.getBlocks();
```

Builds the view and returns a Slack API-compatible array of blocks. 
```javascript
ModalBuilder.getPreviewUrl();
```

Builds the view and returns the preview URL in order to open and preview the view on Slack's Block Kit Builder web application. 
```javascript
ModalBuilder.printPreviewUrl();
```

Calls getPreviewUrl to build the preview URL and log it to the console. 
