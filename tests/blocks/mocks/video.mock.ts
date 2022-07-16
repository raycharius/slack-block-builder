import { VideoBuilder } from '../../../src/blocks/video';

export const params = {
  blockId: 'blockId',
  description: 'description',
  providerIconUrl: 'providerIconUrl',
  providerName: 'providerName',
  thumbnailUrl: 'thumbnailUrl',
  title: 'title',
  titleUrl: 'titleUrl',
  videoUrl: 'videoUrl',
};

export const mock = new VideoBuilder(params);
