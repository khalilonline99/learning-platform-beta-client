import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {user} = useContext(AuthContext);
    
    const courseDetails = useLoaderData();

    const {name, price} = courseDetails;
    const tax = ( parseInt(price)* 0.5)/100;
    const total = Math.round( parseInt(price) + tax);
    // console.log(price);

    return (
        <div>
            <div className='flex flex-col mx-auto items-center mt-10 bg-primary-content p-5'>
                <h3 className='font-medium text-2xl'>Good day, {user?.displayName}</h3>
            </div>
            <div className='flex flex-col mx-auto justify-start mt-10 bg-primary-content p-5'>
                <h3 className='font-medium text-2xl'>This is checkout page. You are buying the following items:</h3>
                <p className='mt-5 text-xl'>Course Name: {name} </p>
                <p className='text-xl'>Price: ${price} </p>
                <p className='text-xl'>Tax: ${tax} </p>
                <p className='text-xl'>Total: ${total} </p>
            </div>
                <button className="btn mx-auto mt-5">Buy Now!</button>
        </div>
    );
};

export default CheckOut;