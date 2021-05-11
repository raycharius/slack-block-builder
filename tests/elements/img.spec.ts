import { ImgBuilder as Class } from '../../src/elements/img';
import { ElementSlackDto as DtoClass } from '../../src/lib';
import { params } from './mocks/img.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'Img';
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
