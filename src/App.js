import React from 'react';
import './style.css';
import Login from './components/Login.js';
import WelcomeText from './components/Welcometext.js';

export default function App() {
  return (
    <div className="parentDiv">
      <WelcomeText name={{ name: 'facebook' }} />
      <Login />
    </div>
  );
}
