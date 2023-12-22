# File Input Builder

?> **Note:** This document is a reference to the `FileInputBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the File Input Builder docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#file_input) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `FileInputBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { FileInput } from 'slack-block-builder';

const myObj = FileInput(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.FileInput(params?);
```

### Params

Each instance of the `FileInputBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`actionId` – *String*

`filetypes` – *String[]*

`maxFiles` – *Int*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `FileInputBuilder` on which it is called.

```javascript
FileInputBuilder.actionId(string);
```

Sets a string to be an identifier for the action taken by the user. It is sent back to your app in the interaction payload when the element is interacted or when the view is submitted. 
```javascript
FileInputBuilder.maxFiles(int?);
```

Maximum number of files that can be uploaded for this file_input element. Minimum of 1, maximum of 10. Defaults to 10 if not specified. Defaults to `10`.
```javascript
FileInputBuilder.filetypes(String[]?);
```

An array of valid file extensions that will be accepted for this element. All file extensions will be accepted if filetypes is not specified. Defaults to `[]`.

### Other Methods

The `FileInputBuilder` object also has other methods available:

```javascript
FileInputBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
