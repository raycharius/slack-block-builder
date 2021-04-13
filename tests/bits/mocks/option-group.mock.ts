import { OptionGroupBit } from '../../../src/bits/option-group';
import { OptionBit } from '../../../src/bits/option';

const data = ['Some Value 1', 'Some Value 2', 'Some Value 3'];

export const params = {
  label: 'label',
};

export const mock = new OptionGroupBit(params)
  .options(data.map((item) => new OptionBit({ text: item, value: item })));
