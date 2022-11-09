import Footer from 'rc-footer';
import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterBottom from '../Pages/Footer/FooterBottom';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='container mx-auto'>
            <Outlet></Outlet>
            </div>
            <div className='mt-16'>
            <FooterBottom></FooterBottom>
            </div>
        </div>
    );
};

export default Main;