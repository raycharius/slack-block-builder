import { ImgElement as Class } from '../../src/elements/img';
import { params } from './mocks/img.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'Img';
const category = 'Elements';

const config = {
  Class,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.imageUrl,
  methods.altText,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
