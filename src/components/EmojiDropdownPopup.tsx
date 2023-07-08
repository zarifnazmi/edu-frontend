import React from 'react';
import { Modal, List, Dropdown, MenuProps, Typography } from 'antd';
import '../index.css'

const { Paragraph, Text, Link } = Typography;
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
  handleCancel: () => void;
  handleTerribleClick: (feedback: any) => void;
  email: string;
}


function EmojiDropdownPopup(prop: PopupProps): JSX.Element {

  return <Modal style={{ textAlign: 'center' }} title={prop.popup_title} open={prop.popup_state} centered footer={null} onCancel={prop.handleCancel}>
    <Paragraph>{prop.popup_desc}</Paragraph>
    {prop.extra_text ? <Text>{prop.extra_text}</Text> : null}
    <div style={{ display: 'flex', justifyContent: 'center', }}>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={prop.data}
        renderItem={(item) => (
          <List.Item onClick={() => {
            if (item.title === 'Terrible...') {
              prop.handleTerribleClick({
                email: prop.email,
                type: item.title,
                comment: ''
              })
            }
          }}>
            <Dropdown menu={{ items: item.suggestions }} trigger={['click']}>
              <div style={{width: 200}}>
                <Link style={{ fontSize: 60 }} >{item.emoji}</Link>
                <Paragraph>{item.title}</Paragraph>
              </div>
            </Dropdown>
          </List.Item>
        )}
      />
    </div>
  </Modal>;
}

export default React.memo(EmojiDropdownPopup);