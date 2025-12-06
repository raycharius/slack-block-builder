import { RichTextLinkBuilder } from '../../../src/bits/rich-text-link';

export const params = {
    url: 'https://example.com',
    text: 'Click here',
};

export const mock = new RichTextLinkBuilder(params);
