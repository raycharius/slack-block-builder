import { OptionGroupBuilder } from '../../../src/bits/option-group';
import { OptionBuilder } from '../../../src/bits/option';

const data = ['Some Value 1', 'Some Value 2', 'Some Value 3'];

export const params = {
  label: 'label',
};

export const mock = new OptionGroupBuilder(params)
  .options(data.map((item) => new OptionBuilder({ text: item, value: item })));
