import React from 'react';

const CardSingle = () => {
    return (
        <div className="card bg-base-100 shadow-xl w-5/6">
            <figure><img src="https://placeimg.com/200/200/arch" alt="Movie" /></figure>
            <div className="card-body ">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default CardSingle;