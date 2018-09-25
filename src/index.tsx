import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import rootStore from './app/store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './routes';

ReactDOM.render((
<Provider store={rootStore}><div className="container"><AppRouter /></div></Provider>),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
