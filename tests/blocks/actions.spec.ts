import { ActionsBlock as Class } from '../../src/blocks/actions';
import { params } from './mocks/actions.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'Actions';
const category = 'Blocks';

const config = {
  Class,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.elements,
  methods.blockId,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
