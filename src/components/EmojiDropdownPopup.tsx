import React from 'react';
import { Modal, List, Dropdown, Typography, message } from 'antd';
import '../index.css'

const { Paragraph, Text, Link } = Typography;
interface PopupProps {
  data: {
    emoji: string;
    title: string;
    suggestions: {
      key: string;
      label: string;
    }[];
  }[];
  popup_state: boolean;
  popup_title: string;
  popup_desc: string;
  extra_text?: string;
  handleCancel: () => void;
  onClick: (data: any) => void;
  email: string;
}


function EmojiDropdownPopup(prop: PopupProps): JSX.Element {
  
  const handleMenuClick = (e: any, n: string) => {
    prop.onClick({
      email: prop.email,
      type: e.title,
      comment: n
    });
    message.info('Thank you for your feedback');
  };

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
              prop.onClick({
                email: prop.email,
                type: item.title,
                comment: ''
              });
              message.info('Thank you for your feedback');
            }
          }}>
            <Dropdown menu={{ 
          items: item.suggestions?.map(suggestion => ({
          label: suggestion.label,
          key: suggestion.key,
          onClick: () => handleMenuClick(item, suggestion.label)
        }))
      }} trigger={['click']}>
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