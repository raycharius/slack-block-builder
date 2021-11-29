import { UserMultiSelectBuilder as Class } from '../../src/elements/user-multi-select';
import { SlackElementDto as DtoClass } from '../../src/internal';
import { params } from './mocks/user-multiselect.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'UserMultiSelectBuilder';
const category = 'Elements';

const config = {
  Class,
  DtoClass,
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
  methods.focusOnLoad,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
