import { ImageBuilder as Class } from '../../src/blocks/image';
import { BlockSlackDto as DtoClass } from '../../src/lib';
import { params } from './mocks/image.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'Image';
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
