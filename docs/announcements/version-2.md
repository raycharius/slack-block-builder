# :sparkles:  Block Builder Version 2.0.0

### :arrow_up:  Migration From Version 1

No need to worry – for 99.99% of developers, the move to Version 2 is not going to break anything. So feel free to bump up. 

See [Breaking Changes](#warning--breaking-changes) below for more information on edge cases that could potentially break things.

To install:

``` bash
npm install --save slack-block-builder@2.0.1
```

Note that the doc site has not been updated. It will be updated upon the final release. However, generated docs based for Version 2 are located in [the docs folder](../) of the `main` branch.

### :sparkles:  New Features

#### Better TypeScript Experience

The library has been rewritten in TypeScript and offers a much better experience than before.

* Improved type checking (there were some flaws in the type definitions of Version 1).
* Better compatibility with the types accepted by Slack's NodeJS SDK.
* All of the JSDoc annotations are now available (they were lost in the type definitions from Version 1).

#### Methods That Configure Now Accept Arguments

In Version 1, there are multiple methods on the builder objects that configure behavior, such as `Button.danger()` and `Button.primary()`. They now accept a boolean value (but still default to their inferred value), making it easier to build logic around them:

```javascript
import { Message, Blocks, Elements } from 'slack-block-builder';

const myShorterMessage = ({ channel, dangerLevel }) => {
  return Message({ channel, text: 'Alas, my friend.' })
    .blocks(
      Blocks.Section({ text: 'One does not simply walk into Slack and click a button.' }),
      Blocks.Section({ text: 'At least that\'s what my friend Slackomir said :crossed_swords:' }),
      Blocks.Divider(),
      Blocks.Actions()
        .elements(
          Elements.Button({ text: 'Sure One Does', actionId: 'gotClicked' })
            .danger(dangerLevel > 42), // Optional argument, defaults to 'true'
          Elements.Button({ text: 'One Does Not', actionId: 'scaredyCat' })
            .primary()))
    .asUser()
    .buildToObject();
};
```  

#### New Utility Functions `BlockCollection()` and `AttachmentCollection()`

It's possible that you want to keep surface configuration separate from UI composition. As such, there are now two new functions that allow you to do just that.

`BlockCollection()` – Accepts multiple arguments or an array of blocks and returns them in an array, in their built state.

`AttachmentCollection()` – Accepts multiple arguments or an array of attachments and returns them in an array, in their built state.

Both of them behave the exact same way as, say, `ModalBuilder.blocks()` and `MessageBuilder.attachments()`.

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

#### Markdown Helpers

Often, we need to format text in our messages, modals, and home tabs using Slack's markdown standard. Block Builder Version 2 comes with helper functions to do that in a more declarative, obvious, and functional way: 

``` javascript
import { Message, Blocks, Md } from 'slack-block-builder';

const myMdMessage = ({ channel, user }) => {
  const slashCommands = ['/schedule', '/cancel', '/remind', '/help'];

  return Message({ channel, text: 'Alas, my friend.' })
    .blocks(
      Blocks.Section({ text: `:wave: Hi there, ${Md.user(user)}!` }),
      Blocks.Section({ text: `${Md.italic('Sorry')}, I didn't get that. Why don't you try out some of my slash commands?` }),
      Blocks.Section({ text: `Here are some of the things that I can do:` }),
      Blocks.Section()
        .text(Md.listBullet(slashCommands
          .map((item) => Md.codeInline(item)))))
    .asUser()
    .buildToObject();
};
```

[**View Example on Slack Block Kit Builder Website**](https://app.slack.com/block-kit-builder/#%7B%22blocks%22:%5B%7B%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22:wave:%20Hi%20there,%20%3C@U03N067AL%3E%21%22%7D,%22type%22:%22section%22%7D,%7B%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22_Sorry_,%20I%20didn%27t%20get%20that.%20Why%20don%27t%20you%20try%20out%20some%20of%20my%20slash%20commands?%22%7D,%22type%22:%22section%22%7D,%7B%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22Here%20are%20some%20of%20the%20things%20that%20I%20can%20do:%22%7D,%22type%22:%22section%22%7D,%7B%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22%E2%80%A2%20%60/schedule%60%5Cn%E2%80%A2%20%60/cancel%60%5Cn%E2%80%A2%20%60/remind%60%5Cn%E2%80%A2%20%60/help%60%22%7D,%22type%22:%22section%22%7D%5D%7D)


#### Both Categorized and Top-Level Imports

Now you can import the functions for instantiating an object as before (as a member of `Blocks`, `Elements`, etc.), or as a top-level import:

```javascript
// Importing exposed groups of objects

import { Surfaces, Blocks, Elements, Bits, Utilities } from 'slack-block-builder';

// Importing objects top-level

import { Modal, Section, Actions, Button } from 'slack-block-builder';
```

#### Better JSDoc Annotations

The JSDoc annotations have gotten better. Moreover, due to the new architecture of the library, they've become much more maintainable, making it easier to improve them in the future.

And as mentioned above, the annotations are now available to those using both TypeScript and plain JavaScript.

![Block Builder JSDoc Support](https://raw.githubusercontent.com/raycharius/slack-block-builder/main/docs/resources/images/jsdoc.png)

### :warning:  Breaking Changes

Overall, the usage of Block Builder has remained the same. But for those who have built certain logic around the internal, private properties of the builder objects may need to change some code.

#### No More Run-Time Type Validation

Block Builder Version 1 checks the type of arguments passed in at runtime and throws errors when they are not compatible, and as such, any logic possibly built around those errors will need to be removed. 

All type checking has been delegate to design time. 

#### Builders Now Have Different Internal Structure

Builder objects now longer have properties `class`, `category`, `result`, and `hasBeenBuilt`. They now only contain methods and the `props` property, which is private.

#### Class Names Have Changed

Both the builder objects and their resulting DTOs now have different class names, so any checking of `instanceof` will more than likely break.
