import { WorkflowButtonBuilder as Class } from '../../src/elements/workflow-button';
import { SlackElementDto as DtoClass } from '../../src/internal';
import { params } from './mocks/workflow-button.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'WorkflowButtonBuilder';
const category = 'Elements';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.accessibilityLabel,
  methods.actionId,
  methods.text,
  methods.danger,
  methods.primary,
  methods.workflow,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
