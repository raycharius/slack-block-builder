import { WorkflowBuilder as Class } from '../../src/bits/workflow';
import { SlackDto as DtoClass } from '../../src/internal';
import { params } from './mocks/workflow.mock';
import { testCompositeBuilderClass } from '../test-composite-builder-class';
import * as methods from '../methods';

const className = 'WorkflowBuilder';
const category = 'Bits';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.trigger,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
