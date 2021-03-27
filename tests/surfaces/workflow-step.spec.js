const { WorkflowStep: Class, WorkflowStepDto: Dto } = require('../../src/surfaces/workflow-step');
const { props: classProps } = require('./mocks/workflow-step.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'WorkflowStep';
const group = 'Surfaces';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.blocks,
  props.privateMetaData,
  props.callbackId,
  props.submitDisabled,
];

helper({ config, props: properties });