import React from 'react';
import { Button, Modal } from 'antd';
import { Card, List, Dropdown, MenuProps } from 'antd';

interface PopupProps {
    data: {
        emoji: string;
        title: string;
        suggestions: MenuProps['items'];
        
    }[];
    popup_state: boolean;
    popup_title: string;
    popup_desc: string;
    extra_text?: string;
}


function EmojiDropdownPopup(prop: PopupProps): JSX.Element {
    const emojiTerrible = '🙁';
    const emojiOkay = '😕';
    const emojiAwesome = '🤩';

    const teribbleItems: MenuProps['items'] = [
        {
          label: 'I felt bored a few times.',
          key: '0',
        },
        {
          label: 'I can only understand some parts.',
          key: '1',
        },
        {
          label: 'I can only do some of the activities.',
          key: '2',
        },
        {
            label: 'I wish to interact more with my tutor.',
            key: '3'
        },
        {
            label: 'I wish to interact more with my classmates.',
            key: '4'
        }
      ];

      const awesomeItems: MenuProps['items'] = [
        {
          label: 'I did not feel bored at all.',
          key: '0',
        },
        {
          label: 'I understood almost everything.',
          key: '1',
        },
        {
          label: 'I can do all the activities.',
          key: '2',
        },
        {
            label: 'I enjoyed interacting with my tutor.',
            key: '3'
        },
        {
            label: 'I enjoyed interacting with my classmates.',
            key: '4'
        }
      ];

    const data = [
        {
          emoji: emojiTerrible,
          title: 'Terrible...',
          suggesstions: []
        },
        {
          emoji: emojiOkay,
          title: 'Okay.',
          suggesstions: teribbleItems
        },
        {
          emoji: emojiAwesome,
          title: 'Awesome!',
          suggesstions: awesomeItems
        }
      ];

  return <Modal style={{textAlign: 'center', alignItems: 'center', alignSelf: 'center'}} title={prop.popup_title} open={prop.popup_state} centered footer={null}>
  <p>{prop.popup_desc}</p>
  <h4>{prop.extra_text}</h4>
  <List
    grid={{ gutter: 16, column: 4 }}
    style={{alignSelf: 'center' }}
    dataSource={prop.data}
    renderItem={(item) => (
      <List.Item onClick={() => console.log(item.emoji)}>
        <Dropdown menu={{ items: item.suggestions }} trigger={['click']}>
            <div>
        <p style={{ fontSize: 50}} >{item.emoji}</p>
            <p style={{marginBottom: 50}}>{item.title}</p>
            </div>
        </Dropdown>
      </List.Item>
     )}
  />
</Modal>;
}

export default React.memo(EmojiDropdownPopup);