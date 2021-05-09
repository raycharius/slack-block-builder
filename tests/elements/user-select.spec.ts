import { UserSelectBuilder as Class } from '../../src/elements/user-select';
import { params } from './mocks/user-select.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'UserSelect';
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
  methods.initialUser,
  methods.confirm,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
