import React from 'react';
import { Outlet } from 'react-router-dom';
import CardSingle from '../../components/CardSingle/CardSingle';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Courses = () => {
    return (
        <div className='mt-12 flex justify-between'>
            <div className='max-w-xs container mx-auto'>
            <LeftSideNav></LeftSideNav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Courses;