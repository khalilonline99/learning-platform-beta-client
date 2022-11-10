import React from 'react';
import { createContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CheckOut from '../../Pages/CheckOut/CheckOut';

const CourseDetails = () => {
    const courseData = useLoaderData();
    const { name, price, about } = courseData;

    return (

        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/tech" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{about}</p>
                <p>{price}</p>
                <div className="card-actions mt-5">
                    <button className="btn btn-primary"><Link to={`/checkout`}>Get Access!</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;