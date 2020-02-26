import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

ReactDOM.render(
    <App />, document.querySelector('#root')
);