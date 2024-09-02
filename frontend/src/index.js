import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

import('auth/AuthApp').then(AuthApp => {
    AuthApp.render();
}).catch(err => console.error("Error loading Auth Microfrontend:", err));

import('profile/ProfileApp').then(ProfileApp => {
    ProfileApp.render();
}).catch(err => console.error("Error loading Profile Microfrontend:", err));

import('cards/CardsApp').then(CardsApp => {
    CardsApp.render();
}).catch(err => console.error("Error loading Cards Microfrontend:", err));
