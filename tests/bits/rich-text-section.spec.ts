import { RichTextSectionBuilder } from '../../src/bits/rich-text-section';
import { RichTextTextBuilder } from '../../src/bits/rich-text-text';
import { SlackDto } from '../../src/internal';
import { RichTextElementType } from '../../src/internal/constants';

describe('RichTextSectionBuilder', () => {
    it('should build with type rich_text_section', () => {
        const result = new RichTextSectionBuilder().build() as any;
        expect(result).toBeInstanceOf(SlackDto);
        expect(result.type).toBe(RichTextElementType.Section);
    });

    it('should build with elements', () => {
        const result = new RichTextSectionBuilder()
            .elements(new RichTextTextBuilder({ text: 'Hello' }))
            .build() as any;
        expect(result.elements).toHaveLength(1);
        expect(result.elements[0].type).toBe(RichTextElementType.Text);
    });
});
