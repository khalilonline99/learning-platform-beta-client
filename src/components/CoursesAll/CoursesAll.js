import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardSingle from '../CardSingle/CardSingle';

const CoursesAll = () => {
    const allCourses = useLoaderData();
    // console.log(allCourses);
    return (
        <div className='grid md:max-lg:grid-cols-3 lg:grid lg: grid-cols-3'>
            
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