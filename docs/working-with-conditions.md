# Working With Conditions

There are multiple ways to handle conditionals with **Block Builder**, and this is really where it provides the most flexibility, since the setter methods, when receiving an argument with a value of `undefined`, simply do not set the property. 

### Preferred Way

While you can definitely use traditional `if` statements, you can also pass in potentially undefined values, inline ternary expressions, the `&&` operator, or even self-invoking functions.

You can take a look at a [real-world example](#mag--real-world-examples) to see this applied, but let's first take a look at the basics:

```javascript
import { Modal, Blocks, Elements, Bits } from 'slack-block-builder';

const myModal = ({ someData }) => {
  return Modal({ title: 'Using If Statements' })
    .blocks(
      Blocks.Section({ text: 'Let\'s take a look at conditionals.' }),
      Blocks.Section({ text: 'This is a much better way to do it!' }))
    .blocks(someData && [
      Blocks.Section({ text: 'This is added if condition is true.' }),
      Blocks.Section({ text: 'And it\'s super easy and readable!' }),
    ])
    .submit(someData ? 'It Is True' : 'It Is False')
    .buildToJSON();
};
```

It's simple. If `someData` has a value, then two `Block` objects are appended. This way, the code can keep the UI-like structure.

For conditions that provide a `true` or `false` instead of `undefined`, using a ternary operator is a great way to go.

Alternatively, you could also get creative with it and even include a self-invoking function that returns either the `Block` objects or `undefined`. Up to you. 

### Traditional Way

However, you can definitely use traditional `if` statements:

```javascript
import { Modal, Blocks, Elements, Bits } from 'slack-block-builder';

const myModal = ({ someData }) => {
  const view = Modal({ title: 'Using If Statements' })
    .blocks(
      Blocks.Section({ text: 'Let\'s take a look at using an if statement.' }),
      Blocks.Section({ text: 'It\'s actually quite simple.' }))
  
  if (someData) {
    view.blocks( /* Append Blocks */ );
  }
  
  if (someData) {
    view.submit('It Is True');
  } else {
    view.submit('It Is False');
  }

  return view.buildToJSON();
};
```

When it comes to appending blocks or changing content for a surface, this is perfectly fine. But the code becomes _much less declarative_ once those conditions start to apply to nested objects, as you'll end up moving code to the top of the function:

```javascript
import { Modal, Blocks, Elements, Bits } from 'slack-block-builder';

const myModal = ({ someData }) => {
  const someBlock = Blocks.Section()
  
  someData 
    ? someBlock.text('Can get unintuitive with nested objects.')
    : someBlock.text('But there is a much better way!')
  
  const view = Modal({ title: 'Using If Statements' })
    .blocks(
      Blocks.Section({ text: 'Let\'s take a look at using an if statement.' }),
      someBlock,
    )
  
  if (someData) {
    view.blocks( /* Append Blocks */ );
  }
  
  if (someData) {
    view.submit('It Is True');
  } else {
    view.submit('It Is False');
  }

  return view.buildToJSON();
};
```