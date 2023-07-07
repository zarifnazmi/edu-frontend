import React, { useState } from 'react';
import { FormInstance } from 'antd/lib/form';
import CardEmailForm from '../../../components/CardEmailForm';
import { useNavigate } from 'react-router-dom';

function SigninContainer() : JSX.Element {
  const [hasError, setHasError] = useState(false);
  const navigation = useNavigate()

    const onFinish = (values: FormInstance['getFieldsValue']) => {
        setHasError(false);
        navigation('/review', { state: values})
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        setHasError(true);
    };

  return <CardEmailForm title='Enter Email' hasError={hasError} onFinishFailed={onFinishFailed} onFinish={onFinish} />;
}

export default SigninContainer;
