import { ConversationMultiSelectBuilder as Class } from '../../src/elements/conversation-multi-select';
import { SlackElementDto as DtoClass } from '../../src/lib';
import { params } from './mocks/conversation-multiselect.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'ConversationMultiSelectBuilder';
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
  methods.initialConversations,
  methods.defaultToCurrentConversation,
  methods.confirm,
  methods.maxSelectedItems,
  methods.filter,
  methods.excludeBotUsers,
  methods.excludeExternalSharedChannels,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
