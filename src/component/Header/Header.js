import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='bbb'>
                <h1>My Super Schools</h1>
                <h2>Total budget of students : 30,000</h2>
            </div>
            <div className='nav-menu'>
                <nav>
                    <a href="./home">Home</a>
                    <a href="./schools">Schools</a>
                    <a href="./about">About</a>
                    <a href="./logout">Logout</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;