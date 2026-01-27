import { IconButtonBuilder as Class } from '../../src/elements/icon-button';
import { SlackElementDto as DtoClass } from '../../src/internal';
import { params } from './mocks/icon-button.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'IconButton';
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
    methods.value,
    methods.accessibilityLabel,
    methods.text,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
