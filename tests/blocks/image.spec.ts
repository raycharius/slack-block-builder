import { ImageBuilder as Class } from '../../src/blocks/image';
import { SlackBlockDto as DtoClass } from '../../src/internal';
import { params } from './mocks/image.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'ImageBuilder';
const category = 'Blocks';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.imageUrl,
  methods.altText,
  methods.title,
  methods.blockId,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
