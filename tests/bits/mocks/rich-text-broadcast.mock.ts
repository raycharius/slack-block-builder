import { RichTextBroadcastBuilder } from '../../../src/bits/rich-text-broadcast';

export const params = {
    range: 'here' as const,
};

export const mock = new RichTextBroadcastBuilder(params);
