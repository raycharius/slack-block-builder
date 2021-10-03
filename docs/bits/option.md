# Option

?> **Note:** This document is a reference to the `OptionBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Option docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;composition-objects#option) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `OptionBuilder` is available as both a top-level import and as a member of its 'category', `Bits`:

```javascript
import { Option } from 'slack-block-builder';

const myObj = Option(params?);

```

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.Option(params?);
```

### Params

Each instance of the `OptionBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`description` – *String*

`text` – *String*

`url` – *String*

`value` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `OptionBuilder` on which it is called.

```javascript
OptionBuilder.description(string);
```

Sets the descriptive text displayed below the text field of the option. 
```javascript
OptionBuilder.text(string);
```

Sets the text displayed for buttons, headers, confirmation dialogs, sections, context blocks, and options. 
```javascript
OptionBuilder.url(string);
```

Sets the URL to which the user is redirected when interacting with a button or option. 
```javascript
OptionBuilder.value(string);
```

Sets a value to be sent to your app when a user interacts with a button or option. 

### Other Methods

The `OptionBuilder` object also has other methods available:

```javascript
OptionBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
