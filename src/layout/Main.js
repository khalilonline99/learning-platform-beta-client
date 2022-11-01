import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-3 gap-4 container mx-auto">
                <div className='mx-auto'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='mx-auto'>
                    <Outlet></Outlet>
                </div>
                <div className='mx-auto'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Main;