
import React from 'react';
import ReactDOM from 'react-dom';
import AuthForm from './components/AuthForm';

const render = () => {
  ReactDOM.render(<AuthForm />, document.getElementById('auth-root'));
};

export { render };
