# Markdown

?> **Note:** This document is a reference for creating markdown in **Block Builder**. For information on markdown supported by Slack's Block Kit, visit [the official doc site](https://api.slack.com/reference/surfaces/formatting).

### Accessing Markdown Helpers 

The helpers for markdown supported by Slack can be imported as a part of the `Md` object, or imported top-level:

```javascript
import { Md } from 'slack-block-builder';

const myString = `Hi, ${Md.user(userId)}! This is an example of using the ${Md.quote('markdown helpers')} in ${Md.bold('Block Builder')}.`;
```

```javascript
import { user, bold, quote } from 'slack-block-builder';

const myString = `Hi, ${user(userId)}! This is an example of using the ${quote('markdown helpers')} in ${bold('Block Builder')}.`;
```

### Helper Functions

```javascript
Md.quote(string);
```

Wraps a string in quotation marks. 
```javascript
Md.blockquote(string);
```

Makes a string a block quote. 
```javascript
Md.bold(string);
```

Makes a string bold.
```javascript
Md.italic(string);
```

Makes a string italic.
```javascript
Md.strike(string);
```

Strikes out a string.
```javascript
Md.codeInline(string);
```

Turns a string into an inline block of code.
```javascript
Md.codeBlock(string);
```

Turns a string into a multi-line block of code.
```javascript
Md.listDash([string1[, ...[, stringN]]);
```

Formats multiple strings into a dashed list.
```javascript
Md.listBullet([string1[, ...[, stringN]]);
```

Formats multiple strings into a bulleted list.
```javascript
Md.link(url: string, alias?: string);
```

Formats a URL into a clickable link. If an alias is provided, it results in an aliased link.
```javascript
Md.mailto(email: string, alias: string);
```

Formats an email address into a clickable link.
```javascript
Md.user(string);
```

Mentions a user in a channel.
```javascript
Md.channel(string);
```

Creates a clickable link to a channel.
```javascript
Md.group(string);
```

Mentions a Slack user group.

```javascript
Md.emoji(string);
```

Creates a named emoji in the colon format.

```javascript
Md.date(
    timestamp: number,
    tokenString: string,
    fallbackText: string,
    optionalLink?: string
);
```

Creates a formatted date, optionally provide a link.