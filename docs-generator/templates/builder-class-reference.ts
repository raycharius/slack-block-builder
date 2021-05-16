/* eslint-disable */
// @ts-ignore
export default `# {{displayName}}

?> **Note:** This document is a reference to the \`{{name}}\` object in **Block Builder**. For information on the business logic for the **{{displayName}}** in the context of the Slack Block Kit framework, visit [the {{displayName}} docs]({{slackLink}}) on Slack's doc site.

### Creating an Instance 

The function that creates a new instance of \`{{name}}\` is available as both a top-level import and as a member of its 'category', \`{{category}}\`:

\`\`\`javascript
import { {{functionName}} } from 'slack-block-builder';

const myObj = {{functionName}}(params?);

\`\`\`

\`\`\`javascript
import { {{category}} } from 'slack-block-builder';

const myObj = {{category}}.{{functionName}}(params?);
\`\`\`

### Params

Each instance of the \`{{name}}\` object has chainable setter methods for the object's properties. However, properties with primitive values can optionally be passed to the instantiating function, should you prefer:

{{#params}}
\`{{name}}\` – *{{type}}*\n
{{/params}}

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return \`this\`, the instance of \`{{name}}\` on which it is called.

{{#setterMethods}}
\`\`\`javascript
{{fullNotation}}
\`\`\`

{{{description}}}
{{/setterMethods}}

### Other Methods

The \`{{name}}\` object also has other methods available:

{{#otherMethods}}
\`\`\`javascript
{{fullNotation}}
\`\`\`

{{{description}}}
{{/otherMethods}}
`
