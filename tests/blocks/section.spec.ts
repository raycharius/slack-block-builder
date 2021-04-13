import { SectionBlock as Class } from '../../src/blocks/section';
import { params } from './mocks/section.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'Section';
const category = 'Blocks';

const config = {
  Class, params, className, category, expectMarkdown: true,
};

const methodsConfig = [
  methods.text,
  methods.blockId,
  methods.fields,
  methods.accessory,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
