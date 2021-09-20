import { WorkflowStepBuilder as Class } from '../../src/surfaces/workflow-step';
import { SlackWorkflowStepDto as DtoClass } from '../../src/lib';
import { params } from './mocks/workflow-step.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'WorkflowStepBuilder';
const category = 'Surfaces';

const config = {
  Class,
  DtoClass,
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
