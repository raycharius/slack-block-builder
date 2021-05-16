import { getMethodDataArray, getClassDataArray } from './getters';
import { generateBuilderClassReferences } from './generators';

(() => {
  const methodData = getMethodDataArray();
  const classData = getClassDataArray(methodData);

  generateBuilderClassReferences(classData);

  // eslint-disable-next-line no-console
  console.log('Docs generated and ready to go!');
})();
