import React from 'react';
import CardSingle from '../CardSingle/CardSingle';

const CoursesAll = () => {
    return (
        <div className='grid grid-cols-3 auto-cols-max gap-4 xs:grid-cols-1'>
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