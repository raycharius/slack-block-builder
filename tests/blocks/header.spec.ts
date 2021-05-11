import { HeaderBuilder as Class } from '../../src/blocks/header';
import { BlockSlackDto as DtoClass } from '../../src/lib';
import { params } from './mocks/header.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'Header';
const category = 'Blocks';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.text,
  methods.blockId,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
