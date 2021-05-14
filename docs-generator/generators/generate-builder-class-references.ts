import { writeFileSync } from 'fs';
import { render } from 'mustache'; // eslint-disable-line import/no-extraneous-dependencies
import { builderClassReference } from '../templates';

import type { ClassData } from '../getters/get-class-data-array';

export default (classData: ClassData[]): void => classData.forEach((clazz) => writeFileSync(
  `./docs/${clazz.folder}/${clazz.file.replace('.ts', '.md')}`,
  render(builderClassReference, clazz),
));
