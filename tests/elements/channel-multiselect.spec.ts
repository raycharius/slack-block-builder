import { ChannelMultiSelectBuilder as Class } from '../../src/elements/channel-multi-select';
import { SlackElementDto as DtoClass } from '../../src/lib';
import { params } from './mocks/channel-multiselect.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'ChannelMultiSelectBuilder';
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
  methods.initialChannels,
  methods.confirm,
  methods.maxSelectedItems,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
