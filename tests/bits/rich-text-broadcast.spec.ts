import { RichTextBroadcastBuilder } from '../../src/bits/rich-text-broadcast';
import { SlackDto } from '../../src/internal';
import { RichTextElementType } from '../../src/internal/constants';

describe('RichTextBroadcastBuilder', () => {
    it('should build with type broadcast', () => {
        const result = new RichTextBroadcastBuilder({ range: 'here' }).build() as any;
        expect(result).toBeInstanceOf(SlackDto);
        expect(result.type).toBe(RichTextElementType.Broadcast);
    });

    it('should apply styles', () => {
        const result = new RichTextBroadcastBuilder({ range: 'here' })
            .bold()
            .italic()
            .build() as any;
        expect(result.style).toEqual({ bold: true, italic: true });
    });
});
