# Home Tab

?> **Note:** This document is a reference to the `HomeTabBuilder` object in **Block Builder**. For information on the business logic for the **Home Tab** in the context of the Slack Block Kit framework, visit [the Home Tab docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;surfaces&#x2F;views) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `HomeTabBuilder` is available as both a top-level import and as a member of its 'category', `Surfaces`:

```javascript
import { HomeTab } from 'slack-block-builder';

const myObj = HomeTab(params?);

```

```javascript
import { Surfaces } from 'slack-block-builder';

const myObj = Surfaces.HomeTab(params?);
```

### Params

Each instance of the `HomeTabBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`privateMetaData` – *String*

`callbackId` – *String*

`externalId` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `HomeTabBuilder` on which it is called.

```javascript
HomeTabBuilder.blocks([Block1[, ...[, BlockN]]);
```

Adds blocks to your view or message. 
```javascript
HomeTabBuilder.callbackId(string);
```

Sets a string for your view that is sent back to your server in all of the interaction payloads and view submissions. Used to identify the view from which the interaction payload is generated. 
```javascript
HomeTabBuilder.externalId(string);
```

Sets a custom identifier for a view or file that must be unique for all views on a per-team basis. 
```javascript
HomeTabBuilder.privateMetaData(string);
```

Defines a string sent back to your server with view and interaction payloads. 

### Other Methods

The `HomeTabBuilder` object also has other methods available:

```javascript
HomeTabBuilder.buildToJSON();
```

Builds the view and returns it as a Slack API-compatible JSON string. 
```javascript
HomeTabBuilder.buildToObject();
```

Builds the view and returns it as a Slack API-compatible object. 
```javascript
HomeTabBuilder.getBlocks();
```

Builds the view and returns a Slack API-compatible array of blocks. 
```javascript
HomeTabBuilder.printPreviewUrl();
```

When called, builds the view and prints to the console the preview URL in order to open and preview the view on Slack's Block Kit Builder web application. 
