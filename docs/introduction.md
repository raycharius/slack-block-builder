# Introduction

This document is aimed at providing an introduction to working with **Block Builder**, including the ideas behind its creation and its approaches.

Overall, **Block Builder** was created to provide a way to write maintainable code that reflects the structure of the resulting Slack Block Kit UI. The syntax and overall builder or chaining approach was inspired by that of SwiftUI, by Apple.

When you create an object in **Block Builder**, you get an instance of its builder that has methods to help you set the properties of the object before finally building it into a Slack API-compatible format.

Typical to the builder pattern, the setter methods return the instance of the object, so that they can be chained.

The functions used to instantiate these objects also accept parameters to set certain properties of the object without using the setter methods.

Here is an example. Both of these product the exact same result: 

<!-- tabs:start -->

#### ** Chaining Methods **

```javascript
import { Message, Blocks } from 'slack-block-builder';

const myMessage = ({ channel, imageUrl }) => {
  return Message()
    .channel(channel)
    .text('Let\'s talk about those hand dryers.')
    .blocks(
      Blocks.Image()
        .imageUrl(imageUrl)
        .altText('Portrait of Sheldon Cooper')
        .title('Hand Dryer\'s Arch Enemy'))
    .asUser()
    .buildToJSON();
};
```

#### ** Params and Chaining Methods **

```javascript
import { Message, Blocks } from 'slack-block-builder';

const myMessage = ({ channel, imageUrl }) => {
  return Message({ channel, text: 'Let\'s talk about those hand dryers.' })
    .blocks(
      Blocks.Image({ imageUrl, title: 'Hand Dryer\'s Arch Enemy' })
        .altText('Portrait of Sheldon Cooper'))
    .asUser()
    .buildToJSON();
};
```

<!-- tabs:end --> 

As a rule, functions that instantiate a Slack Block Kit object only accept parameters for primitive properties. Blocks and Elements cannot be passed in the parameters object. Doing so would defeat the purpose of the idea behind **Block Builder** – declarative code that reflects a UI's structure.

You should take note of the `buildToJSON()` method. Once an object's properties have been set, it needs to be built to render the final state. When an object is built, it mutates all of its properties according to the Slack API specs. Methods that build the object and return a mutated value are referred to as **Build Methods** in this documentation.

That's a quick overview. Let's take a dive into some specifics of working with the setter methods.    