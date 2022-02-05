# Option Group Collection

?> **Note:** This document is a reference for creating a collection of option groups in **Block Builder**. For information on the business logic for the option groups in the context of the Slack Block Kit framework, visit [the official doc site](https://api.slack.com/block-kit) from Slack.

### Creating an Option Group Collection 

An option group collection is an array of built option group objects. The function that creates a collection, `OptionGroupCollection`, is available as both a top-level import and as a member of its 'category', `Utilities`:

```javascript
import { OptionGroupCollection } from 'slack-block-builder';

const myOptionGroups = OptionGroupCollection(optionGroups);

```

```javascript
import { Utilities } from 'slack-block-builder';

const myOptionGroups = Utilities.OptionGroupCollection(optionGroups);
```

This function behaves in the same way as any other [methods that append](../setter-methods.md). 

### When To Use an Option Group Collection

The `OptionGroupCollection` function is meant to be used to create a response to requests to your service made from select menus with external data sources, where you return an array of options or option groups:

```javascript
return { options: OptionGroupCollection( /* Pass in option groups */ ) };
```
