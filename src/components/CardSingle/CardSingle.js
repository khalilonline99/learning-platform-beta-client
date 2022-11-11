import React from 'react';
import { Link } from 'react-router-dom';

const CardSingle = ({course}) => {
    const {_id, name, about, picture, price} = course;
    // console.log(name, price);

    return (
        <div className="card bg-base-100 shadow-xl w-5/6 grid grid-rows-2 grid-flow-col gap-4 mt-2">
            <Link to={`/course/${_id}/details`}><figure className='w-full p-2 mx-auto'><img src={picture} alt="Movie" className='mt-2'/></figure></Link>
            <div className="card-body m-0 pt-0">
                <h2 className="card-title"> {name} </h2>
                <>
                    
                    {
                        about.length > 100?
                            <p> {about.slice(0, 120) + '...'} <Link to={`/course/${_id}/details`}>
                                 <br></br>
                                 <button className="btn btn-primary mt-2">Read More</button> </Link>
                                 </p>
                            :
                            <p>{about}</p>
                    }
                </>
                {/* <div className="card-actions justify-end">
                    <Link to={`/course/${_id}`}> <button className="btn btn-primary">Read More</button> </Link>
                </div> */}
            </div>
        </div>
    );
};

export default CardSingle;