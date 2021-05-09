import { ImageBuilder } from '../../../src/blocks/image';

export const params = {
  imageUrl: 'imageUrl',
  altText: 'altText',
  title: 'title',
  blockId: 'blockId',
};

export const mock = new ImageBuilder(params);
