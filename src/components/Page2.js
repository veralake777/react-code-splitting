import React from 'react';
import logo from '../logo.svg';

const Page2 = ({ onRouteChange }) =>
    <div className='app'>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome to Page2</h1>
        </header>
        <button onClick={() => onRouteChange('Page1')}>Page1</button>
        <button className="disabled">Page2</button>
        <button onClick={() => onRouteChange('Page3')}>Page3</button>
    </div>

export default Page2;