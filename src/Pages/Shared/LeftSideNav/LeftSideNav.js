import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect ( () => {
        fetch('http://localhost:5000/course-categories')
        .then(resp => resp.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2>Categories</h2>
            {
                categories.map(category => <li key={category.category_id}>
                    <Link to={`/course/${category.category_id}`} >{category.name}</Link></li> )
            }
        </div>
    );
};

export default LeftSideNav;