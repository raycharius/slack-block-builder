# Rich Text Team

?> **Note:** This document is a reference to the `RichTextTeamBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Rich Text element docs](https://docs.slack.dev/reference/block-kit/blocks#element-types) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `RichTextTeamBuilder` is available as both a top-level import and as a member of its 'category', `Bits`:

```javascript
import { RichTextTeam } from 'slack-block-builder';

const myObj = RichTextTeam(params?);

```

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.RichTextTeam(params?);
```

### Params

Each instance of the `RichTextTeamBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`teamId` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `RichTextTeamBuilder` on which it is called.

```javascript
RichTextTeamBuilder.teamId(string);
```

Sets the team/workspace ID for the mention (e.g., 'T1234ABCD').

```javascript
RichTextTeamBuilder.bold();
```

Makes the team mention bold.

```javascript
RichTextTeamBuilder.italic();
```

Makes the team mention italic.

```javascript
RichTextTeamBuilder.strike();
```

Adds strikethrough to the team mention.

```javascript
RichTextTeamBuilder.code();
```

Formats the team mention as inline code.

### Other Methods

The `RichTextTeamBuilder` object also has other methods available:

```javascript
RichTextTeamBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
