import { RichTextEmojiBuilder } from '../../src/bits/rich-text-emoji';
import { SlackDto } from '../../src/internal';
import { RichTextElementType } from '../../src/internal/constants';

describe('RichTextEmojiBuilder', () => {
    it('should build with type emoji', () => {
        const result = new RichTextEmojiBuilder({ name: 'wave' }).build() as any;
        expect(result).toBeInstanceOf(SlackDto);
        expect(result.type).toBe(RichTextElementType.Emoji);
    });
});
