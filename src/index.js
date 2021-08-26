import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from './redux/redux-store';
import { Suspense } from 'react';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
