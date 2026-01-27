import { RichTextListBuilder } from '../../src/bits/rich-text-list';
import { SlackDto } from '../../src/internal';
import { RichTextElementType } from '../../src/internal/constants';

describe('RichTextListBuilder', () => {
    it('should build with type rich_text_list', () => {
        const result = new RichTextListBuilder({ style: 'bullet' }).build() as any;
        expect(result).toBeInstanceOf(SlackDto);
        expect(result.type).toBe(RichTextElementType.List);
    });
});
