import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const render = (Component, mountNode) => {
  ReactDom.render(<Component/>, mountNode);
};

render(App, document.getElementById('root'));
