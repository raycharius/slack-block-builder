import { MarkdownBuilder as Class } from '../../src/blocks/markdown';
import { SlackBlockDto as DtoClass } from '../../src/internal';
import { params } from './mocks/markdown.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'MarkdownBuilder';
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
