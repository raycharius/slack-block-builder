# Rich Text User

?> **Note:** This document is a reference to the `RichTextUserBuilder` object in **Block Builder**. For creating @user mentions in rich text.

### Creating an Instance 

```javascript
import { RichTextUser } from 'slack-block-builder';

const myObj = RichTextUser(params?);
```

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.RichTextUser(params?);
```

### Params

`userId` – *String* – The user ID to mention (e.g., `'U1234ABCD'`)

### Styling Methods

```javascript
RichTextUserBuilder.bold();
RichTextUserBuilder.italic();
RichTextUserBuilder.strike();
RichTextUserBuilder.code();
```

### Example

```javascript
import { RichTextUser } from 'slack-block-builder';

RichTextUser({ userId: 'U1234ABCD' }).bold();
```

### Other Methods

```javascript
RichTextUserBuilder.end();
```
