import React from 'react';
import { Modal, List, Dropdown, MenuProps } from 'antd';

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

  return <Modal style={{ textAlign: 'center', alignItems: 'center', alignSelf: 'center' }} title={prop.popup_title} open={prop.popup_state} centered footer={null}>
    <p>{prop.popup_desc}</p>
    <h4>{prop.extra_text}</h4>
    <List
      grid={{ gutter: 16, column: 4 }}
      style={{ alignSelf: 'center' }}
      dataSource={prop.data}
      renderItem={(item) => (
        <List.Item onClick={() => console.log(item.emoji)}>
          <Dropdown menu={{ items: item.suggestions }} trigger={['click']}>
            <div>
              <p style={{ fontSize: 50 }} >{item.emoji}</p>
              <p style={{ marginBottom: 50 }}>{item.title}</p>
            </div>
          </Dropdown>
        </List.Item>
      )}
    />
  </Modal>;
}

export default React.memo(EmojiDropdownPopup);