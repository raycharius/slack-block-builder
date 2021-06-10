<p align="center">
    <img src="https://raw.githubusercontent.com/raycharius/slack-block-builder/master/docs/resources/images/logo-horizontal.png" alt="Logo" width="600px">
</p>

<p align="center">
    <h3 align="center">Maintainable code for Slack interactive messages, modals, and home tabs.</h3>
</p>

<p align="center">
    Lightweight, zero-dependency library for declaratively building Slack Block Kit UI.
    <br />
    <br />
    <a href="https://blockbuilder.dev" target="_blank"><strong>View the Docs »</strong></a>
    <br />
    <br />
    <a href="#space_invader--usage">Quick Start Guide</a>
    ·
    <a href="https://github.com/raycharius/slack-block-builder/issues">Request Feature</a>
    ·
    <a href="https://github.com/raycharius/slack-block-builder/issues">Report Bug</a>
  </p>
</p>

![An example of using Block Builder](docs/resources/images/hero-image.png)

***

[![npm](https://img.shields.io/npm/v/slack-block-builder?color=bright-green)](https://www.npmjs.com/package/slack-block-builder)
![NPM](https://img.shields.io/npm/l/slack-block-builder?color=bright-green)
[![codecov](https://codecov.io/gh/raycharius/slack-block-builder/branch/master/graph/badge.svg)](https://codecov.io/gh/raycharius/slack-block-builder)

> :tada: **Block Builder Version 2.0 is here! Learn about the new features and how to install it [here](docs/announcements/version-2.md).**

**Block Builder** helps you keep your Slack app code for UI maintainable, testable, and reusable. It has a declarative, chainable syntax inspired by [SwiftUI](https://developer.apple.com/documentation/swiftui) and is built for better UI architecture.

### :zap: &nbsp; Features

* Declarative [SwiftUI](https://developer.apple.com/xcode/swiftui/) inspired syntax.
* The ability to build more complex flows using loops and conditionals.
* A `printPreviewURL()` method that outputs a link to preview your UI on Slack's [Block Kit Builder website](https://app.slack.com/block-kit-builder) for easier prototyping.
* A set of helper functions for formatting text with Slack's markdown standard.
* In-depth [doc site](https://blockbuilder.dev) at [https://blockbuilder.dev](https://blockbuilder.dev).
* [Support](#block-kit-support-and-reference) for all current Slack Block Kit objects.
* A great TypeScript experience.
* Extensive JSDoc hints with explanations, validation rules, and quick links to full documentation.
* Zero dependencies.

### :rocket: &nbsp; Coming Soon

* `Paginator` component.
* `Accordion` component.

### :gift: &nbsp; Benefits

* Write three times less code.
* Build more sophistocated, elegant flows.
* Design better UI architecture for your Slack apps.
* Focus more on code in your IDE than on studying the [Slack API docs](https://api.slack.com/).
* Easily integrate localizations into your app.

### :phone: &nbsp; Let's Talk?

Feedback – love it! Aside from GitHub Issues, there are Slack channels available in popular bot communities to discuss **Block Builder** – we'll see you there! :raised_hands:

* **Slack Community** – [\#block-builder](https://slackcommunity.com)
* **Bot Developer Hangout** – [\#block-builder](https://community.botkit.ai)

### :floppy_disk: &nbsp; Installation 

#### Using NPM: 

``` bash
npm install --save slack-block-builder
```

#### Using Yarn: 

``` bash
yarn add slack-block-builder
```

### :space_invader: &nbsp; Usage

For full documentation, make sure you head over to [https://blockbuilder.dev](https://blockbuilder.dev).


### Importing

The functions for creating objects can be both imported directly or through an object that groups them by category.

```javascript
// Importing exposed groups of objects

import { Surfaces, Blocks, Elements, Bits, Utilities } from 'slack-block-builder';

// Importing objects top-level

import { Modal, Section, Actions, Button } from 'slack-block-builder';
```

The same goes for importing Slack markdown helper functions:

```javascript
// Importing the Md object

import { Surfaces, Blocks, Md } from 'slack-block-builder';

// Importing the functions top-level

import { Modal, Section, bold, link } from 'slack-block-builder';
```

### Group Explanations

`Surfaces` – Contains functions for creating modals, messages, home tabs, and workflow steps. 

`Blocks` – Layout blocks used to organize the UI.

`Elements` – UI elements that are used to capture user interaction.

`Bits` – These are composition objects and other bits and pieces from Slack's docs. Included are `Attachment`, `Options`, `OptionGroup`, and `ConfirmationDialog`. They felt like they were deserving of their own category.

`Utilities` – A group of utility functions. See [Utility Functions](#utility-functions).

`Md` – Helper functions for formatting text with Slack's markdown. See [Markdown Helpers](#markdown-helpers).

### Block Kit Support and Reference

Below is a list of supported objects and how to access them in **Block Builder**:

| **Name**             | **Type**           | **Support**                    | **Accessed Via**                      
|----------------------|--------------------|--------------------------------|-----------------------------------------
| Home Tab             | Surface            | :white_check_mark:             | `Surfaces.HomeTab()`                       
| Message              | Surface            | :white_check_mark:             | `Surfaces.Message()`                       
| Modal                | Surface            | :white_check_mark:             | `Surfaces.Modal()`                         
| Workflow Step        | Surface            | :white_check_mark:             | `Surfaces.WorkflowStep()`                         
| Actions              | Block              | :white_check_mark:             | `Blocks.Actions()`                
| Context              | Block              | :white_check_mark:             | `Blocks.Context()`                
| Divider              | Block              | :white_check_mark:             | `Blocks.Divider()`                
| File                 | Block              | :white_check_mark:             | `Blocks.File()`
| Header               | Block              | :white_check_mark:             | `Blocks.Header()`
| Image                | Block              | :white_check_mark:             | `Blocks.Image()`                  
| Input                | Block              | :white_check_mark:             | `Blocks.Input()`                  
| Section              | Block              | :white_check_mark:             | `Blocks.Section()`                
| Button               | Element            | :white_check_mark:️             | `Elements.Button()`               
| Checkboxes           | Element            | :white_check_mark:             | `Elements.Checkboxes()`           
| Date Picker          | Element            | :white_check_mark:             | `Elements.DatePicker()`
| Time Picker          | Element            | :white_check_mark:             | `Elements.TimePicker()`           
| Image                | Element            | :white_check_mark:             | `Elements.Img()`                  
| Overflow Menu        | Element            | :white_check_mark:             | `Elements.OverflowMenu()`         
| Radio Buttons        | Element            | :white_check_mark:             | `Elements.RadioButtons()`         
| Plain-Text Input     | Element            | :white_check_mark:             | `Elements.TextInput()`            
| Select Menus         | Element            | :white_check_mark:             | `Elements.[Type]Select()`          
| Multi-Select Menus   | Element            | :white_check_mark:             | `Elements.[Type]MultiSelect()`     
| Option               | Composition Object | :white_check_mark:             | `Bits.Option()`                   
| Confirm Dialog       | Composition Object | :white_check_mark:             | `Bits.ConfirmationDialog()`       
| Option Group         | Composition Object | :white_check_mark:             | `Bits.OptionGroup()`
| Attachment           | Legacy Feature     | :white_check_mark:             | `Bits.Attachment()`              

### Creating a Simple Interactive Message

Let's take a look at how to compose an interactive message. Even though [Slack](https://slack.com) now has modals, these have always been the basis for [Slack](https://slack.com) apps.

Functions that return Block Kit objects have setter methods for all of the properties, but also support parameters that are passed into the constructor for properties with primitive types.

```javascript
import { Message, Blocks, Elements } from 'slack-block-builder';

const myMessage = ({ channel, dangerLevel }) => {
  return Message()
    .channel(channel)
    .text('Alas, my friend.')
    .blocks(
      Blocks.Section()
        .text('One does not simply walk into Slack and click a button.'),
      Blocks.Section()
        .text('At least that\'s what my friend Slackomir said :crossed_swords:'),
      Blocks.Divider(),
      Blocks.Actions()
        .elements(
          Elements.Button()
            .text('Sure One Does')
            .actionId('gotClicked')
            .danger(dangerLevel > 42), // Optional argument, defaults to 'true'
          Elements.Button()
            .text('One Does Not')
            .actionId('scaredyCat')
            .primary()))
    .asUser()
    .buildToJSON();
};
```

And now an example with using both the setter methods and passing parameters into the functions at initiation:

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
    .buildToJSON();
};
```

Both of these examples render the message below. And the best part? It only took 15 lines of code, as opposed to the 44 lines of JSON generated as a result. 

![An example of using Block Builder for Messages](docs/resources/images/simple-message-example.png)

[**View Example on Slack Block Kit Builder Website**](https://app.slack.com/block-kit-builder#%7B%22blocks%22:%5B%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22One%20does%20not%20simply%20walk%20into%20Slack%20and%20click%20a%20button.%22%7D%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22At%20least%20that's%20what%20my%20friend%20Slackomir%20said%20:crossed_swords:%22%7D%7D,%7B%22type%22:%22divider%22%7D,%7B%22type%22:%22actions%22,%22elements%22:%5B%7B%22type%22:%22button%22,%22text%22:%7B%22type%22:%22plain_text%22,%22text%22:%22Sure%20One%20Does%22%7D,%22action_id%22:%22gotClicked%22,%22style%22:%22danger%22%7D,%7B%22type%22:%22button%22,%22text%22:%7B%22type%22:%22plain_text%22,%22text%22:%22One%20Does%20Not%22%7D,%22action_id%22:%22scaredyCat%22,%22style%22:%22primary%22%7D%5D%7D%5D%7D)

### Creating a Simple Modal

Let's take a look at how modals are created. Here we'll also take a look at working with Bits and with loops, by adding options with the `Array.map()` method.

You'll noticed that we've added an inline condition that returns an initial option only if one has been passed into the function. This is because all the setter methods prune values of `undefined`, uncovering opportunities for inline logic. 

```javascript
import { Modal, Blocks, Elements, Bits } from 'slack-block-builder';

const myShorterModal = ({ menuOptions, selected }) => {
  return Modal({ title: 'PizzaMate', submit: 'Get Fed' })
    .blocks(
      Blocks.Section({ text: 'Hey there, colleague!' }),
      Blocks.Section({ text: 'Hurray for corporate pizza! Let\'s get you fed and happy :pizza:' }),
      Blocks.Input({ label: 'What can we call you?' })
        .element(
          Elements.TextInput({ placeholder: 'Hi, my name is... (What?!) (Who?!)' })
            .actionId('name')),
      Blocks.Input({ label: 'Which floor are you on?' })
        .element(
          Elements.TextInput({ placeholder: 'HQ – Fifth Floor' })
            .actionId('floor')),
      Blocks.Input({ label: 'What\'ll you have?' })
        .element(
          Elements.StaticSelect({ placeholder: 'Choose your favorite...' })
            .actionId('item')
            .options(menuOptions
              .map((item) => Bits.Option({ text: item.name, value: item.id })))
            .initialOption(selected && Bits.Option({ text: selected.name, value: selected.id }))))
    .buildToJSON();
};
```

Both of these examples render the modal below. 

![An example of using Block Builder for Modals](docs/resources/images/simple-modal-example.png)

[**View Example on Slack Block Kit Builder Website**](https://app.slack.com/block-kit-builder#%7B%22type%22:%22modal%22,%22title%22:%7B%22type%22:%22plain_text%22,%22text%22:%22PizzaMate%22%7D,%22blocks%22:%5B%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22Hey%20there,%20colleague!%22%7D%7D,%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22Hurray%20for%20corporate%20pizza!%20Let's%20get%20you%20fed%20and%20happy%20:pizza:%22%7D%7D,%7B%22type%22:%22input%22,%22label%22:%7B%22type%22:%22plain_text%22,%22text%22:%22What%20can%20we%20call%20you?%22%7D,%22element%22:%7B%22type%22:%22plain_text_input%22,%22action_id%22:%22name%22,%22placeholder%22:%7B%22type%22:%22plain_text%22,%22text%22:%22Hi,%20my%20name%20is...%20(What?!)%20(Who?!)%22%7D%7D%7D,%7B%22type%22:%22input%22,%22label%22:%7B%22type%22:%22plain_text%22,%22text%22:%22Which%20floor%20are%20you%20on?%22%7D,%22element%22:%7B%22type%22:%22plain_text_input%22,%22action_id%22:%22floor%22,%22placeholder%22:%7B%22type%22:%22plain_text%22,%22text%22:%22HQ%20–%20Fifth%20Floor%22%7D%7D%7D,%7B%22type%22:%22input%22,%22label%22:%7B%22type%22:%22plain_text%22,%22text%22:%22What'll%20you%20have?%22%7D,%22element%22:%7B%22type%22:%22static_select%22,%22placeholder%22:%7B%22type%22:%22plain_text%22,%22text%22:%22Choose%20your%20favorite...%22%7D,%22action_id%22:%22item%22,%22options%22:%5B%7B%22text%22:%7B%22type%22:%22plain_text%22,%22text%22:%22:cheese_wedge:%20With%20Cheeze%22%7D,%22value%22:%22012%22%7D,%7B%22text%22:%7B%22type%22:%22plain_text%22,%22text%22:%22:fish:%20With%20Anchovies%22%7D,%22value%22:%22013%22%7D,%7B%22text%22:%7B%22type%22:%22plain_text%22,%22text%22:%22:cookie:%20With%20Scooby%20Snacks%22%7D,%22value%22:%22014%22%7D,%7B%22text%22:%7B%22type%22:%22plain_text%22,%22text%22:%22:beer:%20I%20Prefer%20Steak%20and%20Beer%22%7D,%22value%22:%22015%22%7D%5D%7D%7D%5D,%22submit%22:%7B%22type%22:%22plain_text%22,%22text%22:%22Get%20Fed%22%7D%7D)

### Utility Functions

The `Utilities` object contains various utility functions for creating UI. Currently, there are two:

`BlockCollection()` – Accepts multiple arguments or an array of blocks and returns them in an array, in their built state.

`AttachmentCollection()` – Accepts multiple arguments or an array of attachments and returns them in an array, in their built state.

These two functions are useful when you wish to keep surface or view configuration separate from UI representation.

An example using Slack's `WebClient` from their [SDK for Node.js](https://github.com/slackapi/node-slack-sdk):

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

Another example where you might find `BlockCollection()` helpful is when [unfurling links in messages](https://api.slack.com/reference/messaging/link-unfurling):

```javascript
import { BlockCollection, Blocks } from 'slack-block-builder';
import { WebClient } from '@slack/web-api';

const client = new WebClient(process.env.SLACK_TOKEN);

const unfurl = ({ channel, ts, url }) => client.chat.unfurl({
  channel,
  ts,
  unfurls: { [url]: BlockCollection( /* Pass in blocks */ ) },
})
.then((response) => console.log(response))
.catch((error) => console.log(error));
```

### Markdown Helpers

Often you'll find that you need to format text in your messages and modals. *Block Builder* has helper functions available to simply that process. They are available both as members of the `Md` object and as top-level imports. You can find the full list of functions on the [Block Builder doc site](https://blockbuilder.dev):

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
 
## :link: &nbsp; Other Useful Slack-Related Projects

[Bolt for JavaScript](https://github.com/SlackAPI/bolt) – A simple framework for building [Slack](https://slack.com) apps, developed by [Slack](https://slack.com) themselves.

[Node Slack SDK](https://github.com/slackapi/node-slack-sdk) – A great and powerful SDK for building [Slack](https://slack.com) Apps from the ground up.

## :fire: &nbsp; Acknowledgements
 
<img src="https://github.com/korywka.png" alt="@korywka" width="24" height="24" valign="bottom" /> Taras Neporozhniy ([@korywka](https://github.com/korywka)) - For help and ideas along the way!

<img src="https://cdn.dribbble.com/users/683635/avatars/normal/ee2c7c826bfe244b573d145376fe0b5a.png?1510328842" alt="@ft502" width="24" height="24" valign="bottom" /> Alexey Chernyshov ([@ft502](https://dribbble.com/ft502) on Dribbble) - For such a beautiful logo!

<img src="https://github.com/slackhq.png" alt="@slackhq" width="24" height="24" valign="bottom" /> SlackHQ ([@slackhq](https://github.com/slackhq)) - For such a wonderful product and API!

## :black_nib: &nbsp; Author

<img src="https://github.com/raycharius.png" alt="@raycharius" width="24" height="24" valign="bottom" /> Ray East ([@raycharius](https://github.com/raycharius)) - Huge Fan of Slack and **Block Builder** Maintainer
