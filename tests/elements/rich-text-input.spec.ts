import { RichTextInputBuilder as Class } from '../../src/elements/rich-text-input';
import { SlackElementDto as DtoClass } from '../../src/internal';
import { params } from './mocks/rich-text-input.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'RichTextInput';
const category = 'Elements';

const config = {
    Class,
    DtoClass,
    params,
    className,
    category,
};

const methodsConfig = [
    methods.actionId,
    methods.placeholder,
    methods.focusOnLoad,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
