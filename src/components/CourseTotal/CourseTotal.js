import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardSingle from '../CardSingle/CardSingle';

const CourseTotal = () => {
    const courseAll = useLoaderData();
    // console.log(courseAll);
    return (
        <div className='lg:grid lg:grid-cols-3 auto-cols-max gap-4 xs:flex xs:justify-items-center'>
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