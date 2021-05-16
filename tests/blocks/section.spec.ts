import { SectionBuilder as Class } from '../../src/blocks/section';
import { SlackBlockDto as DtoClass } from '../../src/lib';
import { params } from './mocks/section.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'SectionBuilder';
const category = 'Blocks';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
  expectMarkdown: true,
};

const methodsConfig = [
  methods.text,
  methods.blockId,
  methods.fields,
  methods.accessory,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
