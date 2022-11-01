import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { CiSun } from 'react-icons/ci';
import { RiMoonClearFill } from 'react-icons/ri';

const Header = () => {
    return (

        <div className='grid grid-cols-3 gap-4 py-5'>
            <h2 className='text-lg font-bold tracking-wide font-serif'> <Link to='/'> Mentor Hero</Link></h2>

            <div className='nav-middle'>
                <div>
                <Link to='/'>Home</Link>
                <Link to='/courses'>Courses</Link>
                <Link to='/faq'>FAQ</Link>
                <Link to='/blog'>Blog</Link>
                </div>

                <div className='toggle-theme'>
                    <CiSun />
                    <input data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" type="checkbox" className="toggle" />
                    <RiMoonClearFill />
                </div>
            </div>


            <div className='btn-user-auth'>
                <button className="btn btn-sm btn-primary">Login</button>
                <button className="btn btn-sm">Register</button>
            </div>


        </div>

    );
};

export default Header;