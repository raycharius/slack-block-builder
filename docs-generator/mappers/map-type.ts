export default (type: string, capitalize = false): string => {
  if (type.includes('Dto')) {
    return type;
  }

  if (type === 'number') {
    return capitalize ? 'Int' : 'int';
  }

  if (['string', 'FilterString'].includes(type)) {
    return capitalize ? 'String' : 'string';
  }

  if (type === 'Date') {
    return 'Date';
  }

  if (type === 'string[]') {
    return 'String[]';
  }

  if (type === 'boolean') {
    return 'boolean';
  }

  if (type === 'ViewBlockBuilder') {
    return 'Block';
  }

  if (['ActionsElementBuilder', 'InputElementBuilder', 'ContextElement'].includes(type)) {
    return 'Element';
  }

  if (type.includes('Builder')) {
    return type.replace('Builder', '');
  }

  if (type === 'TriggerObject') {
    return 'TriggerObject';
  }

  if (type === 'T') {
    return 'T'; // Means it is a generic and should be replaced when class mapped with methods
  }

  throw new Error(`Could not find a type to map for type '${type}.'`);
};
