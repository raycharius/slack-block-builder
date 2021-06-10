# Blocks

In the [Slack Block Kit](https://api.slack.com/block-kit) framework, a Block is an object or component used to manipulate a Surface's layout.  

If a Surface is to [Block Kit](https://api.slack.com/block-kit) what the `<body>` tag is to an HTML file, a Block is the `<div>` tag. It dictates the informational structure of the UI.

### Accessing Blocks in Block Builder

All of the Blocks provided by the [Slack Block Kit](https://api.slack.com/block-kit) framework are supported in **Block Builder**. They are all accessed through the `Blocks` object that is exposed at the top-level of the library:

```javascript
// Import the encompassing Surface, then the Blocks object

import { Message, Blocks } from 'slack-block-builder';
```

Once the `Blocks` object has been imported, you create a Block using its methods, such as by calling `Blocks.Actions()` to create an `Actions` object.   

For more detailed information, see their individual reference docs.
