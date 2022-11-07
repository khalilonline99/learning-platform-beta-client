import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardSingle from '../CardSingle/CardSingle';

const CoursesAll = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (
        <div className='grid grid-cols-3 auto-cols-max gap-4 xs:grid-cols-1 sm:grid-cols-1'>
            
            {
                allCourses.map(course => <CardSingle
                key={course._id}
                course={course}
                ></CardSingle>)
            }
        </div>
    );
};

export default CoursesAll;