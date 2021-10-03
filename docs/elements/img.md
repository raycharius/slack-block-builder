# Image

?> **Note:** This document is a reference to the `ImgBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Image docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#image) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `ImgBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { Img } from 'slack-block-builder';

const myObj = Img(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.Img(params?);
```

### Params

Each instance of the `ImgBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`imageUrl` – *String*

`altText` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `ImgBuilder` on which it is called.

```javascript
ImgBuilder.altText(string);
```

This a plain-text summary of the image element or block. 
```javascript
ImgBuilder.imageUrl(string);
```

Sets the source URL for the image block or element that you wish to include in your view or message. 

### Other Methods

The `ImgBuilder` object also has other methods available:

```javascript
ImgBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
