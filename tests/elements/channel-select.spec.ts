import { ChannelSelectBuilder as Class } from '../../src/elements/channel-select';
import { ElementSlackDto as DtoClass } from '../../src/lib';
import { params } from './mocks/channel-select.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'ChannelSelectBuilder';
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
  methods.initialChannel,
  methods.confirm,
  methods.responseUrlEnabled,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
