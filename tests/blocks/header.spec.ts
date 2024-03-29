import { HeaderBuilder as Class } from '../../src/blocks/header';
import { SlackBlockDto as DtoClass } from '../../src/internal';
import { params } from './mocks/header.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'HeaderBuilder';
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
