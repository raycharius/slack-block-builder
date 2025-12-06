import { RichTextTextBuilder } from '../../src/bits/rich-text-text';
import { SlackDto } from '../../src/internal';
import { RichTextElementType } from '../../src/internal/constants';

describe('RichTextTextBuilder', () => {
    it('should build with type text', () => {
        const result = new RichTextTextBuilder({ text: 'Hello' }).build() as any;
        expect(result).toBeInstanceOf(SlackDto);
        expect(result.type).toBe(RichTextElementType.Text);
    });

    it('should apply bold style', () => {
        const result = new RichTextTextBuilder({ text: 'Hello' }).bold().build() as any;
        expect(result.style).toEqual({ bold: true });
    });

    it('should apply italic style', () => {
        const result = new RichTextTextBuilder({ text: 'Hello' }).italic().build() as any;
        expect(result.style).toEqual({ italic: true });
    });

    it('should apply strike style', () => {
        const result = new RichTextTextBuilder({ text: 'Hello' }).strike().build() as any;
        expect(result.style).toEqual({ strike: true });
    });

    it('should apply code style', () => {
        const result = new RichTextTextBuilder({ text: 'Hello' }).code().build() as any;
        expect(result.style).toEqual({ code: true });
    });

    it('should apply multiple styles', () => {
        const result = new RichTextTextBuilder({ text: 'Hello' })
            .bold()
            .italic()
            .build() as any;
        expect(result.style).toEqual({ bold: true, italic: true });
    });

    it('should not include style when no styles applied', () => {
        const result = new RichTextTextBuilder({ text: 'Hello' }).build() as any;
        expect(result.style).toBeUndefined();
    });
});
