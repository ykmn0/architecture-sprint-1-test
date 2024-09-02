
import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './components/Cards';

const render = () => {
  ReactDOM.render(<Cards />, document.getElementById('cards-root'));
};

export { render };
