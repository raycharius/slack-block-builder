import { RichTextUserBuilder } from '../../src/bits/rich-text-user';
import { SlackDto } from '../../src/internal';
import { RichTextElementType } from '../../src/internal/constants';

describe('RichTextUserBuilder', () => {
    it('should build with type user', () => {
        const result = new RichTextUserBuilder({ userId: 'U1234ABCD' }).build() as any;
        expect(result).toBeInstanceOf(SlackDto);
        expect(result.type).toBe(RichTextElementType.User);
    });

    it('should apply styles', () => {
        const result = new RichTextUserBuilder({ userId: 'U1234ABCD' })
            .bold()
            .italic()
            .build() as any;
        expect(result.style).toEqual({ bold: true, italic: true });
    });
});
