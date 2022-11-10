import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import CardSingle from '../../components/CardSingle/CardSingle';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Courses = () => {
    // const courses = useLoaderData();
    // console.log(courses.length);
    return (
        <div className='container mt-11 flex flex-col  md:grid md:grid-cols-2 md:justify-items-center  lg:grid lg:grid-cols-3 lg:gap-2'>
            <div>
            <LeftSideNav></LeftSideNav>
            </div>
            <div className='lg:col-span-2'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Courses;