import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardSingle from '../CardSingle/CardSingle';

const CoursesAll = () => {
    const courses = useLoaderData();
    console.log(courses.length);
    return (
        <div className='grid grid-cols-3 auto-cols-max gap-4 xs:grid-cols-1'>
            <div>
                <p>This course category has courses: {courses.length} </p>
            </div>
            <CardSingle></CardSingle>
            <CardSingle></CardSingle>
            <CardSingle></CardSingle>
            <CardSingle></CardSingle>
            <CardSingle></CardSingle>
            <CardSingle></CardSingle>
        </div>
    );
};

export default CoursesAll;