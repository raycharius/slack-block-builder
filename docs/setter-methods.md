# Setter Methods

Using the setter methods is super straightforward, but there are a few things that you should know and consider before starting.

### All Setter Methods Return `this`

For the sake of method chaining, all setter methods for the Slack Block Kit objects return the instance on which they are called. 

What? _No_. Not jQuery. **SwiftUI!**

### All Setter Methods Accept `undefined`

If you pass an argument that is `undefined`, you will not get an error. Instead, the property will simply not be set. And **it's a feature**, not a bug. 

This comes in handy when templating and appending Blocks when certain conditions are met. 

### Some Methods Set, Some Append

Certain setter methods set a single value, whereas others append a new value to an array of existing values. 

As a general rule – methods that end in an 's' will append. A few examples are `Modal.blocks()`, `Blocks.Actions.elements()`, and  `Elements.StaticSelect.options()`.

### Methods That *Set* – Can Be Called Once

When a setter method sets a single value, that property cannot be set again. It become immutable. As such, calling a setter method for a property that has already been set will throw and error:

```javascript
const myModal = () => {
  return Modal()
    .title('My Modal')  // Sets the title of the modal
    .blocks( /* Imagine Blocks */ )
    .title('My Modal')  // Will throw an error, as it has already been set through the 'title()' method
    .buildToJSON();
};
```

This also applies to properties that have been set through the params.

```javascript
const myOtherModal = () => {
  return Modal({ title: 'My Other Modal' })
    .title('My Modal')  // Will throw an error, as it has already been set through the constructor
    .blocks( /* Imagine blocks */ )
    .buildToJSON();
};
```

### Methods That _Append_ – Can Be Called Multiple Times

Being able to call the appending setter methods more than once is one of the best features of **Block Builder**. It allows for a lot of flexibility and especially comes in handy when working with conditionals, where you might append some Blocks or Elements depending on the result of a condition.

```javascript
const myModal = () => {
  return Modal({ title: 'My Other Modal' })
    .blocks( /* Add some block */ )
    .blocks( /* Add another */ ) // Does not throw error, simply appends the Block object
    .buildToJSON();
};
```

### Methods That Append – Accept Arrays and Multiple Args

When using a method that appends a value, or a set of values, you can pass in: 

* A single argument.
* Multiple arguments.
* An array.

This way, you can code however you want, withought being forced into a certain paradigm by **Block Builder**.

All three of the following examples produce the exact same result:

<!-- tabs:start -->

#### ** Single Argument **

```javascript
const myModal = () => {
  return Modal({ title: 'Single Arg Example' })
    .blocks(
      Blocks.Section({ text: 'This is the first section.' }))
    .blocks(
      Blocks.Section({ text: 'This is the second section.' }))
    .blocks(
      Blocks.Section({ text: 'This is the third section.' }))
    .buildToJSON();
};
```

#### ** Multiple Arguments **

```javascript
const myModal = () => {
  return Modal({ title: 'Multiple Args Example' })
    .blocks(
      Blocks.Section({ text: 'This is the first section.' }))
    .blocks(
      Blocks.Section({ text: 'This is the second section.' }),
      Blocks.Section({ text: 'This is the third section.' }))
    .buildToJSON();
};
```

#### ** Array **

```javascript
const myModal = () => {
  return Modal({ title: 'Array Example' })
    .blocks(
      Blocks.Section({ text: 'This is the first section.' }))
    .blocks([
      Blocks.Section({ text: 'This is the second section.' }),
      Blocks.Section({ text: 'This is the third section.' }),
    ])
    .buildToJSON();
};
```

<!-- tabs:end -->

This also allows you to use helpful functions such as `Array.map()`, `Array.reduce()`, etc.

This can come in handy to dynamically create content, such as the `Options` for an `OptionGroup` object:  

```javascript
const myShorterModal = ({ menu }) => { // Pass in an array of menu items from data source
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
            .options(menu.map((item) => Bits.Option({ text: item.name, value: item.id }))))) // Map items to Option objects
    .buildToJSON();
};
```