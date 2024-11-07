import {
  EasyPaginator, Modal, Blocks, BlockBuilder,
} from '../../src';
import { Human, humans } from './mock/data-set.mock';

const getBlocks = ({ item: human }): BlockBuilder[] => [
  Blocks.Section({ text: `${human.firstName} ${human.lastName}` }),
  Blocks.Section({ text: `${human.jobTitle}` }),
  Blocks.Section({ text: `${human.department}` }),
  Blocks.Section({ text: `${human.email}` }),
];

const getModalString = (blocks: BlockBuilder[]): string => Modal({ title: 'Testing' })
  .blocks(blocks)
  .buildToJSON();

describe('Testing Easy Paginator:', () => {
  test('Creating a paginator with the default parameters creates the correct UI and callback data for the first page.', () => {
    const result = getModalString(EasyPaginator<Human>({
      page: 1,
      perPage: 5,
      items: humans,
      actionId: (params) => JSON.stringify(params),
      blocksForEach: getBlocks,
    }).getBlocks());

    expect(result).toEqual(JSON.stringify({
      title: {
        type: 'plain_text',
        text: 'Testing',
      },
      blocks: [
        {
          text: {
            type: 'mrkdwn',
            text: 'Ray East',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Lord of The Slack Apps',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Engineering',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'ray@ray.com',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Taras Neporozhniy',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Brave Cow',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Bad Ass MFs',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'taras@taras.com',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Tereshuk',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Outlander',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Big Rollers',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'dima@dima.com',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Lesha Power',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Kalyanshyk',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'DDD Demons',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'lesha@lesha.com',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Yozhef Hisem',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Molnenosets',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Zakarpatska',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'yozhik@yozhik.com',
          },
          type: 'section',
        },
        {
          elements: [
            {
              type: 'mrkdwn',
              text: 'Page 1 of 4',
            },
          ],
          type: 'context',
        },
        {
          type: 'divider',
        },
        {
          elements: [
            {
              text: {
                type: 'plain_text',
                text: 'Next',
              },
              action_id: '{"buttonId":"next","totalItems":20,"perPage":5,"totalPages":4,"offset":5,"page":2}',
              type: 'button',
            },
          ],
          type: 'actions',
        },
      ],
      type: 'modal',
    }));
  });

  test('Creating a paginator somewhere in the middle parameters creates the correct UI and callback data.', () => {
    const result = getModalString(EasyPaginator({
      items: humans,
      page: 2,
      perPage: 5,
      actionId: (params) => JSON.stringify(params),
      blocksForEach: getBlocks,
    }).getBlocks());

    expect(result).toEqual(JSON.stringify({
      title: {
        type: 'plain_text',
        text: 'Testing',
      },
      blocks: [
        {
          text: {
            type: 'mrkdwn',
            text: 'Andrey Roland',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Bathroom Janitor',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'American Folklore',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'andrey@andrey.com',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Vlad Filimonov',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'MMA Fanatic',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Kopeika Boxers',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'vlad@vlad.com',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Boris Boriska',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Email Builder',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Orange Nissan Owners',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'borya@borya.com',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Vadim Grabovyy',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Local Blonde',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Barcelona United',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'vadik@vadik.com',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Alex Chernyshov',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Shaslikshyk',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Ni Dnya Bez Nozhey',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'alex@alex.com',
          },
          type: 'section',
        },
        {
          elements: [
            {
              type: 'mrkdwn',
              text: 'Page 2 of 4',
            },
          ],
          type: 'context',
        },
        {
          type: 'divider',
        },
        {
          elements: [
            {
              text: {
                type: 'plain_text',
                text: 'Previous',
              },
              action_id: '{"buttonId":"previous","totalItems":20,"perPage":5,"totalPages":4,"offset":0,"page":1}',
              type: 'button',
            },
            {
              text: {
                type: 'plain_text',
                text: 'Next',
              },
              action_id: '{"buttonId":"next","totalItems":20,"perPage":5,"totalPages":4,"offset":10,"page":3}',
              type: 'button',
            },
          ],
          type: 'actions',
        },
      ],
      type: 'modal',
    }));
  });

  test('Creating a paginator with the default parameters creates the correct UI and callback data for the last page.', () => {
    const result = getModalString(EasyPaginator({
      items: humans,
      page: 4,
      perPage: 5,
      nextButtonText: 'TEST FORWARD',
      previousButtonText: 'TEST BACKWARD',
      pageCountText: ({ page, totalPages }) => `This is ${page} of like ${totalPages}`,
      actionId: (params) => JSON.stringify(params),
      blocksForEach: getBlocks,
    }).getBlocks());

    expect(result).toEqual(JSON.stringify({
      title: {
        type: 'plain_text',
        text: 'Testing',
      },
      blocks: [
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Lutsik',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Garmonist',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Relentless Jazz Lovers',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'lutsik@lutsik.com',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Svirepchuk',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Bezrabotniy',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Good Dads and Friends',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'dimka@dimka.com',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Bilkun',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Barabanshyk',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Heavy Ass Beats',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'bilkun@bilkun.com',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Pasha Akimenko',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Fat String Thumper',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Groove Masters',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'pasha@pasha.com',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Karina Suprun',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Calorie Critic',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Health and Fitness',
          },
          type: 'section',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'karina@karina.com',
          },
          type: 'section',
        },
        {
          elements: [
            {
              type: 'mrkdwn',
              text: 'This is 4 of like 4',
            },
          ],
          type: 'context',
        },
        {
          type: 'divider',
        },
        {
          elements: [
            {
              text: {
                type: 'plain_text',
                text: 'TEST BACKWARD',
              },
              action_id: '{"buttonId":"previous","totalItems":20,"perPage":5,"totalPages":4,"offset":10,"page":3}',
              type: 'button',
            },
          ],
          type: 'actions',
        },
      ],
      type: 'modal',
    }));
  });
});
