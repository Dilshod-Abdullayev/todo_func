import { Button, message } from 'antd';
import React from 'react';
const info = () => {
  message.info('This is a normal message');
};
const App = () => (
  <Button type="primary" onClick={info}>
    Static Method
  </Button>
);
export default App;