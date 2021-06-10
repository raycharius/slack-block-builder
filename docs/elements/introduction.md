# Elements

In the [Slack Block Kit](https://api.slack.com/block-kit) framework, Elements are for the most part are responsible for gathering user feedback and interaction. Elements include various types of inputs, select menus, buttons, etc.   

It's these Elements that makes the Slack Block Kit framework as powerful as it is. Your app will be receiving payloads both on actions taken by users and submitted form values when a Modal is submitted. You can read more about that in [Slack's guide to handling user interactivity](https://api.slack.com/interactivity/handling).  

### Accessing Elements in Block Builder

All of the Elements provided by the [Slack Block Kit](https://api.slack.com/block-kit) framework are supported in **Block Builder** and are all accessed through the `Elements` object, which is a top-level import:

```javascript
// Import a Surface, the encompassing Blocks object, then the Elements object

import { Message, Blocks, Elements } from 'slack-block-builder';
```

Once the `Elements` object has been imported, you create an Element using its methods, such as by calling `Elements.Button()` to create a `Button` object.   

For more detailed information, see their individual reference docs.
