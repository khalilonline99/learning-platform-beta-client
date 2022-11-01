import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { CiSun } from 'react-icons/ci';
import { RiMoonClearFill } from 'react-icons/ri';

const Header = () => {
    return (

        <div className="navbar container">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item X</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold normal-case text-3xl">Mentor Hero</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 flex content-center">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li> <Link to='/blog'>Blog</Link></li>
                    <li className='toggle-theme'>
                        <span className='p-0'><CiSun/></span>
                        <input data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" type="checkbox" className="toggle" />
                        <span className='p-0'><RiMoonClearFill  className='text-black'/></span>
                    </li>
                </ul>
            </div>
            <div className="navbar-end btn-user-auth">
            <button className="btn btn-sm btn-primary">Login</button>
                <button className="btn btn-sm">Register</button>
            </div>
        </div>


        /* <div className='grid grid-cols-3 gap-4 py-5 container mx-auto'>
            <h2 className='text-4xl font-bold tracking-wide font-serif'> <Link to='/'> Mentor Hero</Link></h2>

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


        </div> */

    );
};

export default Header;