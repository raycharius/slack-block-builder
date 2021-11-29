import { ImgBuilder as Class } from '../../src/elements/img';
import { SlackElementDto as DtoClass } from '../../src/internal';
import { params } from './mocks/img.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'ImgBuilder';
const category = 'Elements';

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
];

testCompositeBuilderClass({ config, methods: methodsConfig });
