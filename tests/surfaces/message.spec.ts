import { MessageBuilder as Class } from '../../src/surfaces/message';
import { SlackMessageDto as DtoClass } from '../../src/internal';
import { params } from './mocks/message.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'MessageBuilder';
const category = 'Surfaces';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.channel,
  methods.textMessage,
  methods.blocks,
  methods.asUser,
  methods.threadTs,
  methods.replaceOriginal,
  methods.deleteOriginal,
  methods.ephemeral,
  methods.inChannel,
  methods.postAt,
  methods.ts,
  methods.attachments,
  methods.ignoreMarkdown,
  methods.unfurlLinks,
  methods.unfurlMedia,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
