# Rich Text Usergroup

?> **Note:** This document is a reference to the `RichTextUsergroupBuilder` object in **Block Builder**. For creating @usergroup mentions in rich text.

### Creating an Instance 

```javascript
import { RichTextUsergroup } from 'slack-block-builder';

const myObj = RichTextUsergroup(params?);
```

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.RichTextUsergroup(params?);
```

### Params

`usergroupId` – *String* – The usergroup ID to mention (e.g., `'S1234ABCD'`)

### Styling Methods

```javascript
RichTextUsergroupBuilder.bold();
RichTextUsergroupBuilder.italic();
RichTextUsergroupBuilder.strike();
RichTextUsergroupBuilder.code();
```

### Example

```javascript
import { RichTextUsergroup } from 'slack-block-builder';

RichTextUsergroup({ usergroupId: 'S1234ABCD' });
```

### Other Methods

```javascript
RichTextUsergroupBuilder.end();
```
