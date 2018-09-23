import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import App from './app/App';
import rootStore from './app/store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './routes';

// ReactDOM.render((
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>),
//   document.getElementById('root') as HTMLElement
// );

ReactDOM.render((
<Provider store={rootStore}><AppRouter /></Provider>),
  document.getElementById('root') as HTMLElement
);


registerServiceWorker();
