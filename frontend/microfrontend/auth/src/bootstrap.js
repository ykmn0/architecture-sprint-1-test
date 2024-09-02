
import React from 'react';
import ReactDOM from 'react-dom';
import AuthForm from './components/AuthForm'; // Предполагаем, что AuthForm является основным компонентом

const render = () => {
  ReactDOM.render(<AuthForm />, document.getElementById('auth-root'));
};

export { render };
