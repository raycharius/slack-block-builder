import { getClassDataArray, getMethodDataArray, getDocTemplateDataArray } from './getters';

const classData = getClassDataArray();
const methodData = getMethodDataArray();
const docData = getDocTemplateDataArray(classData, methodData);

console.log(docData);
