import { RichTextChannelBuilder } from '../../src/bits/rich-text-channel';
import { SlackDto } from '../../src/internal';
import { RichTextElementType } from '../../src/internal/constants';

describe('RichTextChannelBuilder', () => {
    it('should build with type channel', () => {
        const result = new RichTextChannelBuilder({ channelId: 'C1234ABCD' }).build() as any;
        expect(result).toBeInstanceOf(SlackDto);
        expect(result.type).toBe(RichTextElementType.Channel);
    });

    it('should apply styles', () => {
        const result = new RichTextChannelBuilder({ channelId: 'C1234ABCD' })
            .bold()
            .italic()
            .build() as any;
        expect(result.style).toEqual({ bold: true, italic: true });
    });
});
