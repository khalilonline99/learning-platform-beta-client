import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://placeimg.com/260/400/tech" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Mentor that you're looking for!</h1>
                    <p className="py-6">Here in Mentor Hero, you are getting all skilled industry leading mentors who can teach you in the best way to grow.</p>
                    <button className="btn btn-primary"> <Link to='/courses'>Explore More</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Hero;