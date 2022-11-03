import React from 'react';
import { Link } from 'react-router-dom';

const CardSingle = ({course}) => {
    const {_id, name, about, picture, price} = course;
    // console.log(name, price);

    return (
        <div className="card bg-base-100 shadow-xl w-5/6">
            <figure><img src="https://placeimg.com/200/200/tech" alt="Movie" /></figure>
            <div className="card-body ">
                <h2 className="card-title"> {name} </h2>
                <>
                    
                    {
                        about.length > 100?
                            <p> {about.slice(0, 120) + '...'} <Link to={`/course/${_id}/details`}> <br></br> <button className="btn btn-primary mt-2">Read More</button> </Link> </p>
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