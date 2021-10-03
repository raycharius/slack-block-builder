# Section

?> **Note:** This document is a reference to the `SectionBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Section docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;blocks#section) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `SectionBuilder` is available as both a top-level import and as a member of its 'category', `Blocks`:

```javascript
import { Section } from 'slack-block-builder';

const myObj = Section(params?);

```

```javascript
import { Blocks } from 'slack-block-builder';

const myObj = Blocks.Section(params?);
```

### Params

Each instance of the `SectionBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`blockId` – *String*

`text` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `SectionBuilder` on which it is called.

```javascript
SectionBuilder.fields([string1[, ...[, stringN]]);
```

Adds text fields to the section block, in two columns, side-by-side. 
```javascript
SectionBuilder.accessory(SectionElement);
```

Adds an element to the section block of your view or message. 
```javascript
SectionBuilder.blockId(string);
```

Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process. 
```javascript
SectionBuilder.text(string);
```

Sets the text displayed for buttons, headers, confirmation dialogs, sections, context blocks, and options. 

### Other Methods

The `SectionBuilder` object also has other methods available:

```javascript
SectionBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
