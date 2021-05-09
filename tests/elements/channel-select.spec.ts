import { ChannelSelectBuilder as Class } from '../../src/elements/channel-select';
import { params } from './mocks/channel-select.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'ChannelSelect';
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
  methods.initialChannel,
  methods.confirm,
  methods.responseUrlEnabled,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
