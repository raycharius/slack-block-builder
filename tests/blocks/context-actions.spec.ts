import { ContextActionsBuilder as Class } from '../../src/blocks/context-actions';
import { SlackBlockDto as DtoClass } from '../../src/internal';
import { params } from './mocks/context-actions.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'ContextActionsBuilder';
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
