export default (fileName: string): string => {
  switch (fileName) {
    case 'append-methods.ts':
      return 'Append';
    case 'configuration-methods.ts':
      return 'Configuration';
    case 'other-methods.ts':
      return 'Other';
    case 'set-methods.ts':
      return 'Setter';
    default:
      throw Error(`No method type found for file '${fileName}.'`);
  }
};
