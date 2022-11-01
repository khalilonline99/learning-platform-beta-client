import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (

        <div className='nav-container'>
            <h2> <Link to='/'> Mentor Hero</Link></h2>
            <div>
            <nav>
            <Link to='/'>Home</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/blog'>Blog</Link> 
            <input data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" type="checkbox" className="toggle"/>
            

            
        </nav>
            </div>
        </div>

    );
};

export default Header;