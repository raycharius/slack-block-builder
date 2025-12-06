import { RichTextDateBuilder } from '../../src/bits/rich-text-date';
import { SlackDto } from '../../src/internal';
import { RichTextElementType } from '../../src/internal/constants';

describe('RichTextDateBuilder', () => {
    it('should build with type date', () => {
        const result = new RichTextDateBuilder({ timestamp: 1628633820 }).build() as any;
        expect(result).toBeInstanceOf(SlackDto);
        expect(result.type).toBe(RichTextElementType.Date);
    });

    it('should apply styles', () => {
        const result = new RichTextDateBuilder({ timestamp: 1628633820 })
            .bold()
            .italic()
            .build() as any;
        expect(result.style).toEqual({ bold: true, italic: true });
    });
});
