# Option Group

?> **Note:** This document is a reference to the `OptionGroupBuilder` object in **Block Builder**. For information on the business logic for the **Option Group** in the context of the Slack Block Kit framework, visit [the Option Group docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;composition-objects#option_group) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `OptionGroupBuilder` is available as both a top-level import and as a member of its 'category', `Bits`:

```javascript
import { OptionGroup } from 'slack-block-builder';

const myObj = OptionGroup(params?);

```

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.OptionGroup(params?);
```

### Params

Each instance of the `OptionGroupBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`label` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `OptionGroupBuilder` on which it is called.

```javascript
OptionGroupBuilder.options([Option1[, ...[, OptionN]]);
```

Adds options to the select or multi-select menu. 
```javascript
OptionGroupBuilder.label(string);
```

For input blocks, this sets the text displayed in the label for the input. For an option group, it defines the text displayed as a title for the group. 

### Other Methods

The `OptionGroupBuilder` object also has other methods available:

```javascript
OptionGroupBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
