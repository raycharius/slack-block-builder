import { VideoBuilder as Class } from '../../src/blocks/video';
import { SlackBlockDto as DtoClass } from '../../src/internal';
import { params } from './mocks/video.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'VideoBuilder';
const category = 'Blocks';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
  expectMarkdown: false,
};

const methodsConfig = [
  methods.altText,
  methods.authorName,
  methods.blockId,
  methods.description,
  methods.providerIconUrl,
  methods.providerName,
  methods.thumbnailUrl,
  methods.title,
  methods.titleUrl,
  methods.videoUrl,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
