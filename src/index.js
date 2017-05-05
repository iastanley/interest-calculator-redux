import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import InterestCalculator from './components/interest-calculator';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <InterestCalculator />
  </Provider>,
    document.getElementById('root')
);
