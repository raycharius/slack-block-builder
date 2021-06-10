# Build Methods

There are multiple ways to output the result of a UI in **Block Builder**, and your choice will depend on:

* How you are working with the API.
* If this is runtime or you're prototyping locally.

Any UI built with **Block Builder** starts with a `Surface` object (`Message`, `Modal`, or `HomeTab`). You'll be setting properties using the params object and setters methods. However, to produce useable output, the object has to be built.

There are multiple output types and associated build methods. You can output the result:

* To JSON.
* To object.
* Log a preview URL for previewing the UI on the [Slack Block Kit Builder website](https://app.slack.com/block-kit-builder). 

All of these methods build the object and return a value. When an object has been built, it becomes immutable and makes all of the necessary mutations for the data to be compatible with the [Slack API](https://api.slack.com).

Let's take a look at the different output types and their corresponding build methods. 

### Build to JSON

If you are sending the output of the UI created by **Block Builder** directly to the Slack API, without any further logic or mutations, this is the method you're going to want to use:

<!-- tabs:start -->

#### ** Message **

```javascript
Message.buildToJSON()
```

#### ** Modal **

```javascript
Modal.buildToJSON()
```

#### ** Home Tab **

```javascript
HomeTab.buildToJSON()
```

<!-- tabs:end -->

Builds the object and returns a string representation of the UI compatible with the [Slack API](https://api.slack.com/).

### Build to Object

If there's a reason that you need the output as an object as opposed to JSON string, this is the method you're going to want to use:

<!-- tabs:start -->

#### ** Message **

```javascript
Message.buildToObject()
```

#### ** Modal **

```javascript
Modal.buildToObject()
```

#### ** Home Tab **

```javascript
HomeTab.buildToObject()
```

<!-- tabs:end -->

Builds the object and returns a new object that is compatible with the [Slack API](https://api.slack.com/) (once stringified).

### Get Just The Blocks

It's important to note that `Surface` objects have methods available that configure the behavior of the interaction, not just build out UI. Essentially, built `Surface` objects are their own payload. That is covered in the [Configuring Views](configuring-views.md) doc.

However, it may be that you want to handle this logic elsewhere in your application. There would be two ways of doing that:

* Passing the instance of the `Surface` to that part of the application for further manipulation (setting the necessary properties and building it).
* Retrieving an array of `Blocks` from the built `Surface`, moving all of the configuration to a separate area, and passing in only the UI portion. 

If you prefer the second, then this is the method to use:  

<!-- tabs:start -->

#### ** Message **

```javascript
Message.getBlocks()
```

#### ** Modal **

```javascript
Modal.getBlocks()
```

#### ** Home Tab **

```javascript
HomeTab.getBlocks()
```

<!-- tabs:end -->

Builds the object and returns an array of its `Blocks`. You can then use these as a part of your payload, created elsewhere in the application.

### Output Preview URL

One of the great things about the [Slack Block Kit](https://api.slack.com/block-kit) framework is the [Block Kit Builder website](https://app.slack.com/block-kit-builder). It allows developers to create UI layouts in a WYSIWYG environment.

However, it also allows you to preview your own view by passing in the view's data to the query string, which is super helpful when prototyping.

If this is where you are at, this method is the one for you:  

<!-- tabs:start -->

#### ** Message **

```javascript
Message.printPreviewUrl()
```

#### ** Modal **

```javascript
Modal.printPreviewUrl()
```

#### ** Home Tab **

```javascript
HomeTab.printPreviewUrl()
```

<!-- tabs:end -->

### Good to Know  

Logs a preview URL to Slack's [Block Kit Builder website](https://app.slack.com/block-kit-builder) to the console, with your view's data in the query string.

There are cases when you might need to call a build method more than once. As such, when calling one of the build methods after the object has been built, the object will not be mutated in any way – the method will simply return the built result (built during the first call).
