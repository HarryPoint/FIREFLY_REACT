import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ThemeProvider, injectGlobal} from 'styled-components';
import 'normalize.css';
import './index.css';
import store from './store';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  h1,h2,h3,h4,h5,h6 {
    margin-bottom: 0;
    line-height: 24px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  mark {
    background-color: transparent;
    color: inherit;
    padding: 0;
  }
`;

let theme = {
  ff_en: '"Arial"',
  ff_cn: 'Microsoft YaHei',
  // 文字大小
  fz_xs: '12px',
  fz_sm: '14px',
  fz_md: '16px',
  fz_lg: '18px',
  fz_xl: '22px',
  // 文字颜色
  fc_default: '#000',
  fc_primary: '#ffa800',
  fc_info: '#8f8f8f',
  // fc_warning: 'orange',
  // fc_danger: 'red',
  // 边框颜色
  lc_default: '#ececec',
  // 辅助色
  // 背景默认颜色
  c_default: '#f6f6f6',
  c_primary: '#ffa800',
  c_info: '#339cfe',
  c_warning: '#ff5760',
  // c_danger: 'red',
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
