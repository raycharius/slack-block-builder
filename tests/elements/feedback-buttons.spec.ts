import { FeedbackButtonsBuilder as Class } from '../../src/elements/feedback-buttons';
import { SlackElementDto as DtoClass } from '../../src/internal';
import { params } from './mocks/feedback-buttons.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'FeedbackButtons';
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
];

testCompositeBuilderClass({ config, methods: methodsConfig });
