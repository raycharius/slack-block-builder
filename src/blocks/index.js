const { Actions, ActionsDto } = require('./actions');
const { Context, ContextDto } = require('./context');
const { Divider, DividerDto } = require('./divider');
const { File, FileDto } = require('./file');
const { Header, HeaderDto } = require('./header');
const { Image, ImageDto } = require('./image');
const { Input, InputDto } = require('./input');
const { Section, SectionDto } = require('./section');

const BlockDto = {
  ActionsDto,
  ContextDto,
  DividerDto,
  FileDto,
  HeaderDto,
  ImageDto,
  InputDto,
  SectionDto,
};

const getBlocks = () => {
  const getInstance = (Class, params) => new Class(params);

  return {

    /**
     * Creates and returns an Actions Block
     *
     * {@link https://api.slack.com/reference/block-kit/blocks#actions|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.blockId] Sets a string to be an identifier for the block, that will be available in interaction payloads
     * @return {Actions} An instance of Actions
     */

    Actions: (params) => getInstance(Actions, params),

    /**
     * Creates and returns a Context Block
     *
     * {@link https://api.slack.com/reference/block-kit/blocks#context|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.blockId] Sets a string to be an identifier for the block, that will be available in interaction payloads
     * @return {Context} An instance of Context
     */

    Context: (params) => getInstance(Context, params),

    /**
     * Creates and returns a Divider
     *
     * {@link https://api.slack.com/reference/block-kit/blocks#divider|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.blockId] Sets a string to be an identifier for the block, that will be available in interaction payloads
     * @return {Divider} An instance of Divider
     */

    Divider: (params) => getInstance(Divider, params),

    /**
     * Creates and returns a File Block
     *
     * {@link https://api.slack.com/reference/block-kit/blocks#file|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters for File
     * @param {string} [params.blockId] Sets a string to be an identifier for the block, that will be available in interaction payloads
     * @param {string} [params.externalId] Sets the Slack-provided ID for the external file
     * @return {File} An instance of File
     */

    File: (params) => getInstance(File, params),

    /**
     * Creates and returns a Header Block
     *
     * {@link https://api.slack.com/reference/block-kit/blocks#section|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.blockId] Sets a string to be an identifier for the block, that will be available in interaction payloads
     * @param {string} [params.text] Sets the text to be displayed in the Header Block
     * @return {Section} An instance of Section
     */

    Header: (params) => getInstance(Header, params),

    /**
     * Creates and returns an Image Block
     *
     * {@link https://api.slack.com/reference/block-kit/blocks#image|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.blockId] Sets a string to be an identifier for the block, that will be available in interaction payloads
     * @param {string} [params.imageUrl] Sets the source URL to load the Image from
     * @param {string} [params.altText] Sets the textual summary of the Image
     * @param {string} [params.title] Sets an optional title for the Image
     * @return {Image} An instance of Image
     */

    Image: (params) => getInstance(Image, params),

    /**
     * Creates and returns an Input Block
     *
     * {@link https://api.slack.com/reference/block-kit/blocks#input|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.blockId] Sets a string to be an identifier for the block, that will be available in interaction payloads
     * @param {string} [params.label] Sets a label to be displayed for the Input Block
     * @param {string} [params.hint] Sets the hint to be displayed under the Input.
     * @return {Input} An instance of Input
     */

    Input: (params) => getInstance(Input, params),

    /**
     * Creates and returns a Section Block
     *
     * {@link https://api.slack.com/reference/block-kit/blocks#section|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.blockId] Sets a string to be an identifier for the block, that will be available in interaction payloads
     * @param {string} [params.text] Sets the text to be displayed in the Section Block
     * @return {Section} An instance of Section
     */

    Section: (params) => getInstance(Section, params),
  };
};

module.exports = {
  Actions,
  Context,
  Divider,
  File,
  Header,
  Image,
  Input,
  Section,
  BlockDto,
  getBlocks,
};
