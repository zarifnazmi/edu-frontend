import React from 'react';
import { Form, Typography, Card, Button, Input } from 'antd';
import { FormInstance } from 'antd/lib/form';
import ErrorAlert from './ErrorAlert';

const { Title } = Typography;

interface FormProps {
    title: string;
    onFinish: (values: FormInstance['getFieldsValue']) => void;
    onFinishFailed: (errorInfo: any) => void;
    hasError: boolean;
}


function CardEmailForm(prop: FormProps): JSX.Element {

    return <>
        <Card bordered={false} style={{
            width: '50%',
            height: 500,
            backgroundColor: '#84A7A1',
            justifyContent: 'center'
        }}>
            <Title style={{ color: '#0E2954' }}>{prop.title}</Title>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={prop.onFinish}
                onFinishFailed={prop.onFinishFailed}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                        {
                            type: 'email',
                            message: 'The input is not a valid email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button htmlType="submit" color='#84A7A1'>
                        Submit
                    </Button>
                </Form.Item>

                {prop.hasError ? <ErrorAlert message="Email is invalid" /> : null}
            </Form>
        </Card>
    </>;
}

export default React.memo(CardEmailForm);