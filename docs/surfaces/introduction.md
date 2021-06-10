# Surfaces

According to [Slack's Block Kit documentation](https://api.slack.com/surfaces), a Surface is "anywhere an app can express itself through communication or interaction." 

In a word, you can think of a Surface as a canvas on which you compose an experience for your users. And Blocks and Elements – as the paint. In frontend development terms, you can think of them as the `<body>` tag. 

### The Three Slack Block Kit Surfaces

**Messages** – These are sent to a user or channel from a Slack app as an actual message in the chat. They can be be composed of just text or contain interactive Blocks and Elements. Messages are deployed via the `chat.postMessage` API method.

**Modals** – These are modal dialogs shown to the user in response to user actions, such as a Slash Command invocation or a click in an interactive message. These are deployed via the `view.open`, `view.update` and `view.push` API endpoints.

**Home Tabs** – Think of this as your app's website, or maybe even its Slack profile. It's a place where your app can tell its story and also provide quick links to common actions. Home Tabs are _published_ through the `view.publish` endpoint.

**Workflow Steps** – Modal views that are used in your app's workflows. You can find out more about workflows [here](https://api.slack.com/workflows).

### Accessing Surfaces in Block Builder

**Block Builder** supports all three Surfaces and provides a simple and meaningful interface to compose user experiences with them. Anything you build with Block Builder will start with one of the `Surface` objects.  

They are all three exposed at the highest level of the library:

```javascript
import { Message } from 'slack-block-builder';
```

```javascript
import { Modal } from 'slack-block-builder';
```

```javascript
import { HomeTab } from 'slack-block-builder';
```

```javascript
import { WorkflowStep } from 'slack-block-builder';
```

Once the `Surface` object has been imported, you create an instance by calling it directly, such as by calling `Modal()` to create a `Modal` dialog.   

For more detailed information, see their individual reference docs.