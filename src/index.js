import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from "./redux/store";
import { StyleProvider } from '@ant-design/cssinjs';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <StyleProvider hashPriority="high">
      <Provider store={store}>
        <App />
      </Provider>
    </StyleProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
