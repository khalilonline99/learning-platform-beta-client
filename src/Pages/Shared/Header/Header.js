import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { CiSun } from 'react-icons/ci';
import { FaUserCircle } from 'react-icons/fa';
import { RiMoonClearFill } from 'react-icons/ri';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
        .then(() => {})
        .catch((err)=> console.error(err))
    }
    return (

        <div className="navbar container">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/course'>Courses</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li> <Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold normal-case text-3xl">Mentor Hero</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 flex content-center">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/course'>Courses</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li> <Link to='/blog'>Blog</Link></li>
                    <li className='toggle-theme'>
                        <span className='p-0'><CiSun /></span>
                        <input data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" type="checkbox" className="toggle" />
                        <span className='p-0'><RiMoonClearFill className='text-black' /></span>
                    </li>
                </ul>
            </div>

            <div className='lg:invisible visible'>
            <li className='toggle-theme'>
                        <span className='p-0'><CiSun /></span>
                        <input data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" type="checkbox" className="toggle" />
                        <span className='p-0'><RiMoonClearFill className='text-black' /></span>
                    </li>
            </div>
            <div className="navbar-end btn-user-auth">

                {
                    user?.uid ?
                        <>
                        <p>{user?.displayName}</p>
                        <button onClick={handleLogout} className="btn btn-sm">Log Out</button>
                        </>
                        :
                        <span>
                            <button className="btn btn-sm btn-primary"> <Link to='/login'>Login</Link> </button>
                            <button className="btn btn-sm"><Link to='/register'>Register</Link></button>
                        </span>

                }
                <div>
                    {
                        user?.photoURL ?

                            <div className='flex'>
                            <div className="avatar">
                                <div className="w-2/5 rounded-full">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                            </div>
                            </div>
                            :
                            <FaUserCircle />
                    }
                </div>
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