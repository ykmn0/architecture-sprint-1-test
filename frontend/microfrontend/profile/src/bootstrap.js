
import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile'; // Предполагаем, что Profile является основным компонентом

const render = () => {
  ReactDOM.render(<Profile />, document.getElementById('profile-root'));
};

export { render };
