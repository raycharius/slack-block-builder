# Easy Paginator

?> **Note:** This document is a reference for using the `Paginator` component in **Block Builder**. For information on Slack's Block Kit framework and how this carries over to the API, visit [the official doc site](https://api.slack.com/block-kit) from Slack.

**Block Builder** provides a component for creating paginated content called the `Paginator`. It is one of a few UI components available in the library. 

The `EasyPaginator` function provides another way to create paginated UI for smaller data sets, where paginating data on the database level is overhead. With the `EasyPaginator` function, you can simply pass in an entire data set and the component will take care of extracting the items to be displayed on the current page.  

It works the exact same way as the `Paginator` component ([see the docs](../components/paginator.md)), except that there is no need to pass in the `totalItems` parameter:

### Example

```javascript
import { Modal, Blocks, Elements, EasyPaginator } from 'slack-block-builder';

export default ({ tasks, page, perPage }) => Modal({ title: 'Open Tasks' })
  .blocks(
    Blocks.Section({ text: 'Hi! :wave: And welcome to the FAQ section! Take a look around and if you don\'t find what you need, feel free to open an issue on GitHub.' }),
    Blocks.Section({ text: `You currently have *${tasks.length} open task(s)*:` }),
    EasyPaginator({
      perPage,
      items: tasks, // The entire data set
      page: page || 1,
      actionId: ({ page, offset }) => JSON.stringify({ action: 'render-tasks', page, offset }),
      blocksForEach: ({ item }) => [
        Blocks.Divider(),
        Blocks.Section({ text: `*${item.title}*` })
          .accessory(
            Elements.Button({ text: 'View Details' })
              .actionId('view-details')
              .value(item.id.toString())),
        Blocks.Section({ text: `*Due Date:* ${getDate(item.dueDate)}` }),
      ],
    }).getBlocks())
  .close('Done')
  .buildToJSON();
```

The above code example produces the following UI. In addition, when either Next or Previous is clicked, the app's backend has access to the `page` and `offset` parameter passed into the button's `action_id`.

![Modal Without Team Roster](../resources/images/paginator-modal-example.png)

### Using the Easy Paginator 

A paginator component can be created using the `EasyPaginator` function, which is available as both a top-level import and as a member of the `Components` object.

The `getBlocks()` method returns the result blocks to be added to the intended surface object.

```javascript
import { EasyPaginator } from 'slack-block-builder';

const paginator = EasyPaginator(params);
const blocks = paginator.getBlocks();
```

```javascript
import { Components } from 'slack-block-builder';

const paginator = Components.EasyPaginator(params);
const blocks = paginator.getBlocks();
```

When using with TypeScript, you'll want to dictate the shape of the objects being passed in:

```javascript
import { EasyPaginator } from 'slack-block-builder';

const paginator = EasyPaginator<Entity>(params);
const blocks = paginator.getBlocks();
```
