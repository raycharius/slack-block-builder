import { RichTextColorBuilder as Class } from '../../src/bits/rich-text-color';
import { SlackDto as DtoClass } from '../../src/internal';
import { params } from './mocks/rich-text-color.mock';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'RichTextColor';
const category = 'Bits';

const config = {
    Class,
    DtoClass,
    params,
    className,
    category,
};

const methodsConfig: unknown[] = [];

testCompositeBuilderClass({ config, methods: methodsConfig });
