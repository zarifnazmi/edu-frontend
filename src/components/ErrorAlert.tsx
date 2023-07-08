import React from 'react';
import { Alert } from 'antd';

interface AlertProps {
    message: string;
}

function ErrorAlert(prop: AlertProps): JSX.Element {

  return <Alert message={prop.message} type="error" />;
}

export default React.memo(ErrorAlert);