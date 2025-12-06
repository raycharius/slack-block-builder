import { RichTextLinkBuilder } from '../../src/bits/rich-text-link';
import { SlackDto } from '../../src/internal';
import { RichTextElementType } from '../../src/internal/constants';

describe('RichTextLinkBuilder', () => {
    it('should build with type link', () => {
        const result = new RichTextLinkBuilder({ url: 'https://example.com' }).build() as any;
        expect(result).toBeInstanceOf(SlackDto);
        expect(result.type).toBe(RichTextElementType.Link);
    });

    it('should apply bold style', () => {
        const result = new RichTextLinkBuilder({ url: 'https://example.com' })
            .bold()
            .build() as any;
        expect(result.style).toEqual({ bold: true });
    });

    it('should apply multiple styles', () => {
        const result = new RichTextLinkBuilder({ url: 'https://example.com' })
            .bold()
            .italic()
            .build() as any;
        expect(result.style).toEqual({ bold: true, italic: true });
    });
});
