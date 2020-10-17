const Objects = require('../../objects');

class BuilderHelper {
  static getOption(builder, { isMarkdown } = { isMarkdown: false }) {
    if (this.isUndefined(builder)) {
      return undefined;
    }

    if (!builder.hasBeenBuilt) {
      builder.build({ isMarkdown });
    }

    return builder.result;
  }

  static getOptions(builders, { isMarkdown } = { isMarkdown: false }) {
    if (this.isUndefined(builders)) {
      return undefined;
    }

    return builders.map((builder) => this.getBuilderResult(builder, { isMarkdown }));
  }

  static getBuilderResult(builder, { isMarkdown } = { isMarkdown: false }) {
    if (this.isUndefined(builder)) {
      return undefined;
    }

    if (!builder.hasBeenBuilt) {
      builder.build({ isMarkdown });
    }

    return builder.result;
  }

  static getBuilderResults(builders) {
    if (this.isUndefined(builders)) {
      return undefined;
    }

    return builders.map((builder) => this.getBuilderResult(builder));
  }

  static getPlainTextObject(string) {
    if (this.isUndefined(string)) {
      return undefined;
    }

    return new Objects.PlainTextObject(string);
  }

  static getMarkdownObject(string) {
    if (this.isUndefined(string)) {
      return undefined;
    }

    return new Objects.MarkdownObject(string);
  }

  static getElementsForContext(array) {
    if (this.isUndefined(array)) {
      return undefined;
    }

    return array.map((item) => (typeof item === 'string'
      ? this.getMarkdownObject(item)
      : item.build()));
  }

  static getFields(array) {
    if (this.isUndefined(array)) {
      return undefined;
    }

    return array.map((item) => this.getMarkdownObject(item));
  }


  static getFormattedDate(date) {
    if (this.isUndefined(date)) {
      return undefined;
    }

    return date.toISOString().split('T')[0];
  }

  static getFilter(props) {
    const { filter, excludeBotUsers, excludeExternalSharedChannels } = props;

    if (this.areUndefined(filter, excludeBotUsers, excludeExternalSharedChannels)) {
      return undefined;
    }

    return new Objects.FilterObject({ filter, excludeBotUsers, excludeExternalSharedChannels });
  }

  static getDispatchActionsConfigurationObject(props) {
    const { onEnterPressed, onCharacterEntered } = props;

    if (this.areUndefined(onEnterPressed, onCharacterEntered)) {
      return undefined;
    }

    return new Objects.DispatchActionsConfigurationObject({ triggerActionsOn: [onEnterPressed, onCharacterEntered].filter(Boolean) });
  }

  static isUndefined(value) {
    return typeof value === 'undefined';
  }

  static areUndefined(...values) {
    return values.filter((value) => this.isUndefined(value)).length === values.length;
  }
}

module.exports = BuilderHelper;
