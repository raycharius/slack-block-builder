import { IconButtonBuilder } from '../../../src/elements/icon-button';

export const params = {
    actionId: 'actionId',
    icon: 'trash',
    text: 'Delete',
    value: 'delete-value',
    accessibilityLabel: 'Delete item',
};

export const mock = new IconButtonBuilder(params);
