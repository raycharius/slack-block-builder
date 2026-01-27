import { RichTextPreformattedBuilder } from '../../src/bits/rich-text-preformatted';
import { SlackDto } from '../../src/internal';
import { RichTextElementType } from '../../src/internal/constants';

describe('RichTextPreformattedBuilder', () => {
    it('should build with type rich_text_preformatted', () => {
        const result = new RichTextPreformattedBuilder().build() as any;
        expect(result).toBeInstanceOf(SlackDto);
        expect(result.type).toBe(RichTextElementType.Preformatted);
    });
});
