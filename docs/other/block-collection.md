# Block Collection

?> **Note:** This document is a reference for creating a collection of blocks in **Block Builder**. For information on the business logic for the blocks in the context of the Slack Block Kit framework, visit [the official doc site](https://api.slack.com/block-kit) from Slack.

### Creating a Block Collection 

A block collection is an array of built block objects. The function that creates a collection, `BlockCollection`, is available as both a top-level import and as a member of its 'category', `Utilities`:

```javascript
import { BlockCollection } from 'slack-block-builder';

const myBlocks = BlockCollection(blocks);

```

```javascript
import { Utilities } from 'slack-block-builder';

const myBlocks = Utilities.BlockCollection(blocks);
```

This function behaves in the same way as any other [methods that append](../setter-methods.md). 

### When To Use a Block Collection

In **Block Builder**, the `Model`, `Message`, `WorkflowStep` and `HomeTab` objects are more than UI representations. They also allow you to configure the surface. However, you may prefer to keep UI representation and surface configuration separate in your application. When that's the case, using `BlockCollection` is the way to go.

Take a look at this example, using the WebClient from Slack's Node SDK:

```javascript
import { BlockCollection, AttachmentCollection, Blocks } from 'slack-block-builder';
import { WebClient } from '@slack/web-api';

const client = new WebClient(process.env.SLACK_TOKEN);

client.chat.postMessage({
  channel: 'ABCDEFG',
  text: 'Hello, my dear, sweet world!',
  blocks: BlockCollection( /* Pass in blocks */ ),
  attachments: AttachmentCollection( /* Pass in attachments */ ),
})
.then((response) => console.log(response))
.catch((error) => console.log(error));
``` 
