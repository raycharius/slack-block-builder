# Attachment Collection

?> **Note:** This document is a reference for creating a collection of attachments in **Block Builder**. For information on the business logic for the attachments in the context of the Slack Block Kit framework, visit [the official doc site](https://api.slack.com/block-kit) from Slack.

### Creating an Attachment Collection 

A block collection is an array of built block objects. The function that creates a collection, `AttachmentCollection`, is available as both a top-level import and as a member of its 'category', `Utilities`:

```javascript
import { AttachmentCollection } from 'slack-block-builder';

const myAttachments = AttachmentCollection(attachments);

```

```javascript
import { Utilities } from 'slack-block-builder';

const myAttachments = Utilities.AttachmentCollection(attachments);
```

This function behaves in the same way as any other [methods that append](../setter-methods.md). 

### When To Use an Attachment Collection

In **Block Builder**, the `Message` object is more than a UI representation. It also allow you to configure the behavior of the message. However, you may prefer to keep UI representation and surface configuration separate in your application. When that's the case, using `AttachmentCollection` is the way to go.

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
