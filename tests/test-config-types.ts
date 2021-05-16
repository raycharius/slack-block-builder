/* eslint-disable @typescript-eslint/no-explicit-any */

type AnyObject = {
  [key: string]: any;
};

export type CompositeBuilderClassConfig = {
  Class: new (...args: any[]) => any;
  DtoClass: new (...args: any[]) => any;
  params: AnyObject,
  className: string;
  category: string;
  expectMarkdown?: boolean;
};

export type CompositeBuilderClassTestArgs = {
  config: CompositeBuilderClassConfig;
  methods: any[];
};

export type MethodTestArgs = {
  Class: new (...args: any[]) => any;
  params: AnyObject,
  className: string;
  category: string;
  methodArgMock?: any;
  methodName: string;
  propSetterPropName: string;
  slackDtoParamName: string;
  mutatedValueType?: any;
  expectArray?: boolean;
  expectMarkdown?: boolean;
  expectedEnumValue?: string;
  expectedBuiltValue?: any;
};
