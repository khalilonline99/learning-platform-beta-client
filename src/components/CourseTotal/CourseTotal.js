import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseTotal = () => {
    const courseAll = useLoaderData();
    return (
        <div>
            <h2>All course while /course route:  {courseAll.length} </h2>
        </div>
    );
};

export default CourseTotal;