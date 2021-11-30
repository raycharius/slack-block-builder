# Conditionals

### Accessing Inline Conditional Helpers 

The helpers for inline conditionals can be imported as a part of the `conditionals` object, or as top-level imports:

```javascript
import { conditionals } from 'slack-block-builder';
```

```javascript
import { setIfTruthy, omitIfTruthy, setIfFalsy, omitIfFalsy } from 'slack-block-builder';
```

Each function accepts to arguments – the first being a value that is evaluated whether it is either `null`, `undefined`, or `false`, and the second being the value to set or omit:

```javascript
import { Modal, Blocks, Elements, Bits, setIfTruthy } from 'slack-block-builder';

export default ({ groups, selectedGroup, selectedGroupMembers }) => Modal()
  .title('Edit Groups')
  .callbackId('submit-edit-groups')
  .blocks(
    Blocks.Section({ text: 'Hello! Need to edit some groups?'}),
    Blocks.Input({ label: 'Select a group to get started' })
      .dispatchAction()
      .element(
        Elements.StaticSelect({ placeholder: 'Select a group...' })
          .actionId('selectedGroup')
          .options(groups
            .map(({ name, id }) => Bits.Option({ text: name, value: id })))),
    setIfTruthy(selectedGroup, [
      Blocks.Input({ label: 'Current group members' })
        .element(
          Elements.UserMultiSelect({ placeholder: 'Select members...' })
            .actionId('groupMembers')
            .initialUsers(selectedGroupMembers))
    ]))
  .submit(setIfTruthy(selectedGroup, 'Save Changes'))
  .buildToJSON();
```

These functions essentially return either the value passed into as the second argument or `undefined`, depending on the condition. Please note that falsy is defined as `null`, `undefined`, or `false`. To avoid side effects, values such as `0` or `''` are not considered to be falsy.
