import { FileInputBuilder as Class } from '../../src/elements/file-input';
import { SlackElementDto as DtoClass } from '../../src/internal';
import { params } from './mocks/file-input.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'FileInput';
const category = 'Elements';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.filetypes,
  methods.maxFiles,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
