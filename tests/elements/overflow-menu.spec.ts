import { OverflowMenuElement as Class } from '../../src/elements/overflow-menu';
import { params } from './mocks/overflow-menu.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'OverflowMenu';
const category = 'Elements';

const config = {
  Class,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.actionId,
  methods.options,
  methods.confirm,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
