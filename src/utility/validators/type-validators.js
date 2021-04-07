const Validator = require('../lib/validator');
const { enumValues, categories, classes } = require('../constants');

module.exports = {
  isString: new Validator({
    condition: (value) => typeof value === 'string',
    message: 'String',
  }),

  areStrings: new Validator({
    condition: (values) => (Array.isArray(values)
      ? values.filter((value) => typeof value === 'string').length === values.length
      : false),
    message: 'Strings',
  }),

  isInt: new Validator({
    condition: (value) => Number.isInteger(value),
    message: 'Integer',
  }),

  isBool: new Validator({
    condition: (value) => typeof value === 'boolean',
    message: 'Boolean',
  }),

  isDate: new Validator({
    condition: (value) => value instanceof Date,
    message: 'instance of Date',
  }),

  areBlocks: new Validator({
    condition: (values) => (Array.isArray(values)
      ? values.filter((value) => value.category === categories.block).length === values.length
      : false),
    message: 'instances of Blocks',
  }),

  isElement: new Validator({
    condition: (value) => value.category === categories.element,
    message: 'instance of Element',
  }),

  areElementsOrStrings: new Validator({
    condition: (values) => (Array.isArray(values)
      ? values.filter((value) => (typeof value === 'string' || value.category === categories.element)).length === values.length
      : false),
    message: 'instances of Elements',
  }),

  isOption: new Validator({
    condition: (value) => value.class === classes.option,
    message: 'instance of Option',
  }),

  areOptions: new Validator({
    condition: (values) => (Array.isArray(values)
      ? values.filter((value) => value.class === classes.option).length === values.length
      : false),
    message: 'instances of Option',
  }),

  areOptionGroups: new Validator({
    condition: (values) => (Array.isArray(values)
      ? values.filter((value) => value.class === classes.optionGroup).length === values.length
      : false),
    message: 'instances of OptionGroup',
  }),

  isConfirmationDialogOrString: new Validator({
    condition: (value) => Boolean(typeof value === 'string' || value.class === classes.confirmationDialog),
    message: 'instance of ConfirmationDialog',
  }),

  isButtonStyleEnum: new Validator({
    condition: (value) => [enumValues.danger, enumValues.primary].includes(value),
    message: 'String with value \'danger\' or \'primary\'',
  }),

  areStringsOrImages: new Validator({
    condition: (values) => (Array.isArray(values)
      ? values.filter((value) => Boolean(typeof value === 'string' || value.class === classes.img)).length === values.length
      : false),
    message: 'Strings or instances of Img',
  }),

  isResponseTypeEnum: new Validator({
    condition: (value) => [enumValues.ephemeral, enumValues.inChannel].includes(value),
    message: 'String with value of \'ephemeral\'',
  }),

  isTimestamp: new Validator({
    condition: (value) => new Date(value).getTime() > 0,
    message: 'UNIX timestamp',
  }),

  areAttachments: new Validator({
    condition: (values) => (Array.isArray(values)
      ? values.filter((value) => value.class === classes.attachment).length === values.length
      : false),
    message: 'instances of Attachment',
  }),

  isDispatchConfigEnum: new Validator({
    condition: (value) => [enumValues.onEnterPressed, enumValues.onCharacterEntered].includes(value),
    message: 'String with value \'on_enter_pressed\' or \'on_character_entered\'',
  }),

  isHhMmTime: new Validator({
    condition: (value) => new RegExp('([0-2][0-9]:[0-9][0-9])').test(value),
    message: 'String in the \'HH:mm\' format, where \'HH\' is the 24-hour format of an hour, and \'mm\' is minutes with leading zero',
  }),
};
