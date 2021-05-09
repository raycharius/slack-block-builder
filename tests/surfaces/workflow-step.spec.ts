import { WorkflowStepBuilder as Class } from '../../src/surfaces/workflow-step';
import { params } from './mocks/workflow-step.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'WorkflowStep';
const category = 'Surfaces';

const config = {
  Class,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.blocks,
  methods.privateMetaData,
  methods.callbackId,
  methods.submitDisabled,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
