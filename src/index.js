import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from "./redux/store";
import { StyleProvider } from '@ant-design/cssinjs';

ReactDOM.render(
  <StyleProvider hashPriority="high">
    <Provider store={store}>
      <App />
    </Provider>
  </StyleProvider>,
  document.getElementById('root')
);
