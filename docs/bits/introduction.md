# Bits

This is the one category of objects that differs from those laid out in the [Slack Block Kit](https://api.slack.com/block-kit) documentation.     

The `Bits` object in **Block Builder** contains various bits and pieces from the Slack Block Kit documentation. More specifically, **Attachment**, **Options**, **Option Groups**, **Confirmation Dialogs**, and **Workflow**.    

### Accessing Bits in Block Builder

All of the composition objects provided by the [Slack Block Kit](https://api.slack.com/block-kit) framework are supported in **Block Builder** and most are accessed through the `Bits` object, which is a top-level import. The others (Markdown, Plain-Text, FilterType) are created in the background when a view is compiled.

The `Bits` object also contains a method called `Attachment()` which builds out attachments for messages.

```javascript
// Import a Surface, Blocks, the encompassing Elements, then the Bits object

import { Message, Blocks, Elements, Bits } from 'slack-block-builder';
```

Once the `Bits` object has been imported, you create one of the included composition object using its methods, such as by calling `Bits.Option()` to create an `Option` object for a select menu.   

For more detailed information, see their individual reference docs.
