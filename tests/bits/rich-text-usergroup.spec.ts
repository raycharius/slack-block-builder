import { RichTextUsergroupBuilder } from '../../src/bits/rich-text-usergroup';
import { SlackDto } from '../../src/internal';
import { RichTextElementType } from '../../src/internal/constants';

describe('RichTextUsergroupBuilder', () => {
    it('should build with type usergroup', () => {
        const result = new RichTextUsergroupBuilder({ usergroupId: 'S1234ABCD' }).build() as any;
        expect(result).toBeInstanceOf(SlackDto);
        expect(result.type).toBe(RichTextElementType.Usergroup);
    });

    it('should apply styles', () => {
        const result = new RichTextUsergroupBuilder({ usergroupId: 'S1234ABCD' })
            .bold()
            .italic()
            .build() as any;
        expect(result.style).toEqual({ bold: true, italic: true });
    });
});
