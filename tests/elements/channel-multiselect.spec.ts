import { ChannelMultiSelectElement as Class } from '../../src/elements/channel-multi-select';
import { params } from './mocks/channel-multiselect.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'ChannelMultiSelect';
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
  methods.initialChannels,
  methods.confirm,
  methods.maxSelectedItems,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
