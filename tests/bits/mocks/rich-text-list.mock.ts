import { RichTextListBuilder } from '../../../src/bits/rich-text-list';

export const params = {
    style: 'bullet' as const,
    indent: 0,
    border: 0 as const,
};

export const mock = new RichTextListBuilder(params);
