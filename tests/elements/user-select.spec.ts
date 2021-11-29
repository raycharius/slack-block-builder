import { UserSelectBuilder as Class } from '../../src/elements/user-select';
import { SlackElementDto as DtoClass } from '../../src/internal';
import { params } from './mocks/user-select.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'UserSelectBuilder';
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
  methods.initialUser,
  methods.confirm,
  methods.focusOnLoad,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
