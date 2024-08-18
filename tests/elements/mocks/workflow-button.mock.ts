import { WorkflowButtonBuilder } from '../../../src/elements/workflow-button';

export const params = {
  text: 'text',
  actionId: 'actionId',
  accessibilityLabel: 'accessibilityLabel',
};

export const mock = new WorkflowButtonBuilder(params).danger();
