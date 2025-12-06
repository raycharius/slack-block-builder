import { TableBuilder as Class } from '../../src/blocks/table';
import { SlackBlockDto as DtoClass } from '../../src/internal';
import { params } from './mocks/table.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'TableBuilder';
const category = 'Blocks';

const config = {
    Class,
    DtoClass,
    params,
    className,
    category,
};

const methodsConfig = [
    methods.blockId,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
