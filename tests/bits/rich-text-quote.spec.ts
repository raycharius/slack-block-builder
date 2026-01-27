import { RichTextQuoteBuilder } from '../../src/bits/rich-text-quote';
import { SlackDto } from '../../src/internal';
import { RichTextElementType } from '../../src/internal/constants';

describe('RichTextQuoteBuilder', () => {
    it('should build with type rich_text_quote', () => {
        const result = new RichTextQuoteBuilder().build() as any;
        expect(result).toBeInstanceOf(SlackDto);
        expect(result.type).toBe(RichTextElementType.Quote);
    });
});
