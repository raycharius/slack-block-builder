import { HomeTabBuilder as Class } from '../../src/surfaces/home-tab';
import { ViewSlackDto as DtoClass } from '../../src/lib';
import { params } from './mocks/home-tab.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'HomeTabBuilder';
const category = 'Surfaces';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.blocks,
  methods.privateMetaData,
  methods.callbackId,
  methods.externalId,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
