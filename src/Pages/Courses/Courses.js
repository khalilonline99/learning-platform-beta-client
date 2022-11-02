import React from 'react';
import { Outlet } from 'react-router-dom';
import CardSingle from '../../components/CardSingle/CardSingle';

const Courses = () => {
    return (
        <div className='mt-12 flex justify-between'>
            <div className='max-w-xs container mx-auto'>
            <h3>Categories</h3>
            <h3>Categories 1</h3>
            <h3>Categories 2</h3>
            <h3>Categories 3</h3>
            <h3>Categories 4</h3>
            <h3>Categories 5</h3>
            <h3>Categories 6</h3>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Courses;