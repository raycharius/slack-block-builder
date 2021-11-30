import { ConversationSelectBuilder as Class } from '../../src/elements/conversation-select';
import { SlackElementDto as DtoClass } from '../../src/internal';
import { params } from './mocks/conversation-select.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'ConversationSelectBuilder';
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
  methods.initialConversation,
  methods.defaultToCurrentConversation,
  methods.confirm,
  methods.responseUrlEnabled,
  methods.filter,
  methods.focusOnLoad,
  methods.excludeExternalSharedChannels,
  methods.excludeBotUsers,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
