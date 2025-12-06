# Feedback Buttons

?> **Note:** This document is a reference to the `FeedbackButtonsBuilder` object in **Block Builder**. For more information on how this carries over to the Slack API, view the [the Feedback Buttons docs](https://docs.slack.dev/reference/block-kit/block-elements#feedback_buttons) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of `FeedbackButtonsBuilder` is available as both a top-level import and as a member of its 'category', `Elements`:

```javascript
import { FeedbackButtons } from 'slack-block-builder';

const myObj = FeedbackButtons(params?);

```

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.FeedbackButtons(params?);
```

### Params

Each instance of the `FeedbackButtonsBuilder` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

`actionId` – *String*


?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `FeedbackButtonsBuilder` on which it is called.

```javascript
FeedbackButtonsBuilder.actionId(string);
```

Sets a string to be an identifier for the source of an action in interaction payloads.

```javascript
FeedbackButtonsBuilder.positiveButton(config);
```

Sets the positive feedback button configuration. Config object should have: `text` (string), `value` (string), and optional `accessibilityLabel` (string).

```javascript
FeedbackButtonsBuilder.negativeButton(config);
```

Sets the negative feedback button configuration. Config object should have: `text` (string), `value` (string), and optional `accessibilityLabel` (string).

### Other Methods

The `FeedbackButtonsBuilder` object also has other methods available:

```javascript
FeedbackButtonsBuilder.end();
```

Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object. 
