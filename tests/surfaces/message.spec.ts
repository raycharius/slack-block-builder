import { MessageSurface as Class } from '../../src/surfaces/message';
import { params } from './mocks/message.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'Message';
const category = 'Surfaces';

const config = {
  Class,
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
];

testCompositeBuilderClass({ config, methods: methodsConfig });
