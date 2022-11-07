import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardSingle from '../CardSingle/CardSingle';

const CourseTotal = () => {
    const courseAll = useLoaderData();
    console.log(courseAll);
    return (
        <div className='grid grid-cols-3 auto-cols-max gap-4 xs:grid-cols-1 sm:grid-cols-1'>
            {
                courseAll.map(course => <CardSingle
                key={course._id}
                course ={course}
                ></CardSingle>)
            }
        </div>
    );
};

export default CourseTotal;