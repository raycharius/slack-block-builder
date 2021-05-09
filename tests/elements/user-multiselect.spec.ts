import { UserMultiSelectBuilder as Class } from '../../src/elements/user-multi-select';
import { params } from './mocks/user-multiselect.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'UserMultiSelect';
const category = 'Elements';

const config = {
  Class,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.placeholder,
  methods.actionId,
  methods.initialUsers,
  methods.confirm,
  methods.maxSelectedItems,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
