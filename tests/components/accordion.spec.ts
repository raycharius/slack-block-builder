import {
  Accordion, Modal, Blocks, BlockBuilder,
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

describe('Testing Accordion:', () => {
  test('Creating an accordion with an empty array of expanded items produces the correct result', () => {
    const result = getModalString(Accordion<Human>({
      items: humans,
      expandedItems: [],
      titleText: ({ item }) => `${item.firstName} ${item.lastName}`,
      actionId: (params) => JSON.stringify(params),
      blocksForExpanded: getBlocks,
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
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[0]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Taras Neporozhniy',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[1]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Tereshuk',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Lesha Power',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[3]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Yozhef Hisem',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[4]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Andrey Roland',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[5]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Vlad Filimonov',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[6]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Boris Boriska',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[7]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Vadim Grabovyy',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[8]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Alex Chernyshov',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[9]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Serega Grigoruk',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[10]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Igor Roik',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[11]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Tretiakov',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[12]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Sasha Chernyavska',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[13]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Arthur Nick',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[14]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Lutsik',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[15]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Svirepchuk',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[16]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Bilkun',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[17]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Pasha Akimenko',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[18]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Karina Suprun',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[19]}',
            type: 'button',
          },
          type: 'section',
        },
      ],
      type: 'modal',
    }));
  });

  test('Creating an accordion with an array with one expanded item produces the correct result', () => {
    const result = getModalString(Accordion<Human>({
      items: humans,
      expandedItems: [2],
      titleText: ({ item }) => `${item.firstName} ${item.lastName}`,
      actionId: (params) => JSON.stringify(params),
      blocksForExpanded: getBlocks,
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
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,0]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Taras Neporozhniy',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,1]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Tereshuk',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'Close',
            },
            action_id: '{"expandedItems":[]}',
            type: 'button',
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
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Lesha Power',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,3]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Yozhef Hisem',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,4]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Andrey Roland',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,5]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Vlad Filimonov',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,6]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Boris Boriska',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,7]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Vadim Grabovyy',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,8]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Alex Chernyshov',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,9]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Serega Grigoruk',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,10]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Igor Roik',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,11]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Tretiakov',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,12]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Sasha Chernyavska',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,13]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Arthur Nick',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,14]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Lutsik',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,15]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Svirepchuk',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,16]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Bilkun',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,17]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Pasha Akimenko',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,18]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Karina Suprun',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,19]}',
            type: 'button',
          },
          type: 'section',
        },
      ],
      type: 'modal',
    }));
  });

  test('Creating an accordion with an two expanded items produces the correct result', () => {
    const result = getModalString(Accordion<Human>({
      items: humans,
      expandedItems: [2, 0],
      titleText: ({ item }) => `${item.firstName} ${item.lastName}`,
      actionId: (params) => JSON.stringify(params),
      blocksForExpanded: getBlocks,
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
          accessory: {
            text: {
              type: 'plain_text',
              text: 'Close',
            },
            action_id: '{"expandedItems":[2]}',
            type: 'button',
          },
          type: 'section',
        },
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
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Taras Neporozhniy',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,0,1]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Tereshuk',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'Close',
            },
            action_id: '{"expandedItems":[0]}',
            type: 'button',
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
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Lesha Power',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,0,3]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Yozhef Hisem',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,0,4]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Andrey Roland',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,0,5]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Vlad Filimonov',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,0,6]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Boris Boriska',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,0,7]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Vadim Grabovyy',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,0,8]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Alex Chernyshov',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,0,9]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Serega Grigoruk',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,0,10]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Igor Roik',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,0,11]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Tretiakov',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,0,12]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Sasha Chernyavska',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,0,13]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Arthur Nick',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,0,14]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Lutsik',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,0,15]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Svirepchuk',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,0,16]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Bilkun',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,0,17]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Pasha Akimenko',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,0,18]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Karina Suprun',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2,0,19]}',
            type: 'button',
          },
          type: 'section',
        },
      ],
      type: 'modal',
    }));
  });

  test('Creating an accordion with a single expanded item and set to collapse others on expand produces the correct result', () => {
    const result = getModalString(Accordion<Human>({
      items: humans,
      expandedItems: [1],
      collapseOnExpand: true,
      titleText: ({ item }) => `${item.firstName} ${item.lastName}`,
      actionId: (params) => JSON.stringify(params),
      blocksForExpanded: getBlocks,
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
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[0]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Taras Neporozhniy',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'Close',
            },
            action_id: '{"expandedItems":[]}',
            type: 'button',
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
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Tereshuk',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[2]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Lesha Power',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[3]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Yozhef Hisem',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[4]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Andrey Roland',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[5]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Vlad Filimonov',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[6]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Boris Boriska',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[7]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Vadim Grabovyy',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[8]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Alex Chernyshov',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[9]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Serega Grigoruk',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[10]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Igor Roik',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[11]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Tretiakov',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[12]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Sasha Chernyavska',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[13]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Arthur Nick',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[14]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Lutsik',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[15]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Svirepchuk',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[16]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Bilkun',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[17]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Pasha Akimenko',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[18]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Karina Suprun',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'More',
            },
            action_id: '{"expandedItems":[19]}',
            type: 'button',
          },
          type: 'section',
        },
      ],
      type: 'modal',
    }));
  });

  test('Creating an accordion with custom button copy produces the correct results.', () => {
    const result = getModalString(Accordion<Human>({
      items: humans,
      expandedItems: [1],
      collapseOnExpand: true,
      expandButtonText: 'EXPAND ME',
      collapseButtonText: 'COLLAPSE ME',
      titleText: ({ item }) => `${item.firstName} ${item.lastName}`,
      actionId: (params) => JSON.stringify(params),
      blocksForExpanded: getBlocks,
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
          accessory: {
            text: {
              type: 'plain_text',
              text: 'EXPAND ME',
            },
            action_id: '{"expandedItems":[0]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Taras Neporozhniy',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'COLLAPSE ME',
            },
            action_id: '{"expandedItems":[]}',
            type: 'button',
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
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Tereshuk',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'EXPAND ME',
            },
            action_id: '{"expandedItems":[2]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Lesha Power',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'EXPAND ME',
            },
            action_id: '{"expandedItems":[3]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Yozhef Hisem',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'EXPAND ME',
            },
            action_id: '{"expandedItems":[4]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Andrey Roland',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'EXPAND ME',
            },
            action_id: '{"expandedItems":[5]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Vlad Filimonov',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'EXPAND ME',
            },
            action_id: '{"expandedItems":[6]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Boris Boriska',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'EXPAND ME',
            },
            action_id: '{"expandedItems":[7]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Vadim Grabovyy',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'EXPAND ME',
            },
            action_id: '{"expandedItems":[8]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Alex Chernyshov',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'EXPAND ME',
            },
            action_id: '{"expandedItems":[9]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Serega Grigoruk',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'EXPAND ME',
            },
            action_id: '{"expandedItems":[10]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Igor Roik',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'EXPAND ME',
            },
            action_id: '{"expandedItems":[11]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Tretiakov',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'EXPAND ME',
            },
            action_id: '{"expandedItems":[12]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Sasha Chernyavska',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'EXPAND ME',
            },
            action_id: '{"expandedItems":[13]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Arthur Nick',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'EXPAND ME',
            },
            action_id: '{"expandedItems":[14]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Lutsik',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'EXPAND ME',
            },
            action_id: '{"expandedItems":[15]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Svirepchuk',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'EXPAND ME',
            },
            action_id: '{"expandedItems":[16]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Dima Bilkun',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'EXPAND ME',
            },
            action_id: '{"expandedItems":[17]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Pasha Akimenko',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'EXPAND ME',
            },
            action_id: '{"expandedItems":[18]}',
            type: 'button',
          },
          type: 'section',
        },
        {
          type: 'divider',
        },
        {
          text: {
            type: 'mrkdwn',
            text: 'Karina Suprun',
          },
          accessory: {
            text: {
              type: 'plain_text',
              text: 'EXPAND ME',
            },
            action_id: '{"expandedItems":[19]}',
            type: 'button',
          },
          type: 'section',
        },
      ],
      type: 'modal',
    }));
  });
});
