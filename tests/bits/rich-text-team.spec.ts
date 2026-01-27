import { RichTextTeamBuilder as Class } from '../../src/bits/rich-text-team';
import { SlackDto as DtoClass } from '../../src/internal';
import { params } from './mocks/rich-text-team.mock';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'RichTextTeam';
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
