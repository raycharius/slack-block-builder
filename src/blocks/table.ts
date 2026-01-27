import { BlockBuilderBase } from '../internal/base';
import { BlockType, RichTextElementType } from '../internal/constants';
import { SlackBlockDto } from '../internal/dto';
import { applyMixins } from '../internal/helpers';
import {
    BlockId,
    End,
} from '../internal/methods';
import { RichTextBuilder } from './rich-text';
import { RichTextSectionBuilder } from '../bits/rich-text-section';
import { RichTextTextBuilder } from '../bits/rich-text-text';

interface ColumnSettings {
    align?: 'left' | 'center' | 'right';
    is_wrapped?: boolean;
}

export interface TableParams {
    blockId?: string;
}

export interface TableBuilder extends BlockId,
    End {
    rows(rows: unknown[][]): this;
    columnSettings(settings: ColumnSettings[]): this;
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/blocks/table-block
 * @@displayName Table
 */

export class TableBuilder extends BlockBuilderBase {
    /** @internal */

    /**
     * @description Sets the table rows. Each row is an array of cells (rich_text or raw_text).
     * @param {unknown[][]} rows - Array of rows, each containing cell objects.
     */
    public rows(rows: unknown[][]): this {
        this.props.rows = rows.map((row) => row.map((cell) => {
            let cellResult = cell;

            if (typeof cell === 'string') {
                cellResult = new RichTextBuilder()
                    .elements(
                        new RichTextSectionBuilder()
                            .elements(
                                new RichTextTextBuilder({ text: cell }),
                            ),
                    )
                    .build();
            } else {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const cellObj = cell as any;

                if (cellObj.type === 'text' && typeof cellObj.text === 'string' && !cellObj.style) {
                    cellResult = new RichTextBuilder()
                        .elements(
                            new RichTextSectionBuilder()
                                .elements(
                                    new RichTextTextBuilder({ text: cellObj.text }),
                                ),
                        )
                        .build();
                } else if (typeof cellObj.build === 'function') {
                    cellResult = cellObj.build();
                }
            }

            // Validate cell content
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const cellAny = cellResult as any;

            if (cellAny.type !== BlockType.RichText) {
                throw new Error(`Table cells must be of type '${BlockType.RichText}', but found '${cellAny.type}'. Verify that you are passing a RichText block or a string to the table rows.`);
            }

            if (cellAny?.elements && Array.isArray(cellAny.elements)) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                cellAny.elements.forEach((element: any) => {
                    if ([
                        RichTextElementType.List,
                        RichTextElementType.Quote,
                        RichTextElementType.Preformatted,
                    ].includes(element.type)) {
                        throw new Error(`Table cells cannot contain ${element.type}. Only rich_text_section is supported.`);
                    }
                });
            }

            return cellResult;
        }));

        return this;
    }

    /**
     * @description Sets column behavior settings.
     * @param {ColumnSettings[]} settings - Array of column settings with align and is_wrapped options.
     */
    public columnSettings(settings: ColumnSettings[]): this {
        this.props.columnSettings = settings;
        return this;
    }

    public build(): Readonly<SlackBlockDto> {
        return this.getResult(SlackBlockDto, {
            type: BlockType.Table,
            rows: this.props.rows,
            columnSettings: this.props.columnSettings,
        });
    }
}

applyMixins(TableBuilder, [
    BlockId,
    End,
]);
