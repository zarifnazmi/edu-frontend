import React from 'react';
import { Spin } from 'antd';


function Loader(): JSX.Element {

  return <Spin size="large" />;
}

export default React.memo(Loader);