import { MarkdownBuilder } from '../../../src/blocks/markdown';

export const params = {
    blockId: 'blockId',
    text: '# Hello World',
};

export const mock = new MarkdownBuilder(params);
