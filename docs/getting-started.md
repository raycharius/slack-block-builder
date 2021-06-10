# Getting Started

In this section, we'll take a quick look at a few things that you need to know about the [Slack Block Kit](https://api.slack.com/block-kit) framework before you get started, if you aren't familiar with the framework. We'll also take a look at the basics of accessing objects in **Block Builder**.

### Heirarchy and Structure

When building views and messages for [Slack](https://slack.com) apps, there is a certain heirarchy that needs to be followed, which is also true of any UI library used to build those out.

#### There are four kinds of objects: ####

* **Surfaces** – Think of these as the `<body>` tag of an HTML file. It is the container. 
* **Blocks** – Think of each of these as a `<div>` or `<section>` tag. These mostly deal with layout. 
* **Elements** – These are UI elements that mostly responsible for gathering user feedback and interaction.
* **Composition Objects** – Most of these are concerned with API payload data structure, but some are also very connected to the UI and UX of a flow. In **Block Builder**, you only explicitly work with the latter, and they are referred to at **Bits**.

#### As a general rule: ####

* **Surfaces** contain Blocks.
* **Blocks** contain Elements.
* **Composition Objects** (or **Bits**) are more often than not contained in Elements, but can also be a part of Surfaces and Blocks (more on that later).

### Exposed Imports

The top-level imports are as follows: 

```javascript
import { Message, Modal, HomeTab, Blocks, Elements, Bits } from 'slack-block-builder';
```
The first three, `Message`, `Modal`, and `HomeTab`, are methods for creating `Surface` objects. They are exposed separately, as more often than not, you'll only be using one in a file.

The rest are objects that have functions that allow you to create new instances of members of the category. For example, `Blocks.Section()`, `Elements.TextInput()`, and `Bits.ConfirmationDialog()`.

### Example

The following example illustrates a very simple modal dialog that illustrates the general hierarchy and puts an object from each category into action:

```javascript
import { Modal, Blocks, Elements, Bits } from 'slack-block-builder';

const myModal = () => {
  return Modal({ title: 'Hello World' })
    .blocks(
      Blocks.Section({ text: 'This is just a super simple example.'}),    
      Blocks.Input({ label: 'Who\'s your favorite colleague?' })
        .element(
          Elements.UserSelect({ placeholder: 'I\'ll keep it a secret...'})  
            .confirm(
              Bits.ConfirmationDialog({
                title: 'You sure that\'s your favorite?',
                text: 'There\'s no turning back.',
                confirm: 'Yep',
                deny: 'On Second Thought'
              }))))
    .buildToJSON();   
};
```

That's really all of the basics. However, you should continue on to read about other topics, more specific to **Block Builder**, such as working with the [setter methods](setter-methods.md), and how conditionals can be handled.
