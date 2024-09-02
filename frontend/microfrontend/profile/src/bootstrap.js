
import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile';

const render = () => {
  ReactDOM.render(<Profile />, document.getElementById('profile-root'));
};

export { render };
