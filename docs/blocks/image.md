# Image

?> **Note:** This document is a reference to the `ImageBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Image docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;blocks#image) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `ImageBuilder` is available as both a top-level import and as a member of its 'category', `Blocks`:

```javascript
import { Image } from 'slack-block-builder';

const myObj = Image(params?);

```

```javascript
import { Blocks } from 'slack-block-builder';

const myObj = Blocks.Image(params?);
```

### Params

Each instance of the `ImageBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`altText` – *String*

`blockId` – *String*

`imageUrl` – *String*

`title` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `ImageBuilder` on which it is called.

```javascript
ImageBuilder.altText(string);
```

This a plain-text summary of the image element or block. 
```javascript
ImageBuilder.blockId(string);
```

Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process. 
```javascript
ImageBuilder.imageUrl(string);
```

Sets the source URL for the image block or element that you wish to include in your view or message. 
```javascript
ImageBuilder.title(string);
```

Sets the title displayed for the block, element, or confirmation dialog. 

### Other Methods

The `ImageBuilder` object also has other methods available:

```javascript
ImageBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
