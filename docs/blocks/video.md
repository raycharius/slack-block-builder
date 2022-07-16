# Video

?> **Note:** This document is a reference to the `VideoBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Video docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;blocks#video) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `VideoBuilder` is available as both a top-level import and as a member of its 'category', `Blocks`:

```javascript
import { Video } from 'slack-block-builder';

const myObj = Video(params?);

```

```javascript
import { Blocks } from 'slack-block-builder';

const myObj = Blocks.Video(params?);
```

### Params

Each instance of the `VideoBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`blockId` – *String*

`description` – *String*

`providerIconUrl` – *String*

`providerName` – *String*

`thumbnailUrl` – *String*

`title` – *String*

`titleUrl` – *String*

`videoUrl` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `VideoBuilder` on which it is called.

```javascript
VideoBuilder.altText(string);
```

This a plain-text summary of the image element or block. 
```javascript
VideoBuilder.authorName(string);
```

This a plain-text representation of the author of a video. 
```javascript
VideoBuilder.blockId(string);
```

Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process. 
```javascript
VideoBuilder.description(string);
```

Sets the descriptive text displayed below the text field of the option or for a video, if creating a Video block. 
```javascript
VideoBuilder.providerIconUrl(string);
```

Icon for the video provider - ex. YouTube or Vimeo icon. 
```javascript
VideoBuilder.providerName(string);
```

The originating application or domain of the video ex. YouTube or Vimeo. 
```javascript
VideoBuilder.thumbnailUrl(string);
```

A URL that loads the thumbnail image of the video. 
```javascript
VideoBuilder.title(string);
```

Sets the title displayed for the block, element, or confirmation dialog. 
```javascript
VideoBuilder.titleUrl(string);
```

A hyperlink for the video's title text. 
```javascript
VideoBuilder.videoUrl(string);
```

The URL of the video to embed in the Video block. 

### Other Methods

The `VideoBuilder` object also has other methods available:

```javascript
VideoBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
