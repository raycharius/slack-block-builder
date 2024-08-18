import { WorkflowBuilder } from '../../../src/bits/workflow';
import { TriggerObject } from '../../../src/internal';

export const params = {
  trigger: {
    url: 'string',
  },
};

const trigger = new TriggerObject(params.trigger);

export const mock = new WorkflowBuilder().trigger(trigger);
