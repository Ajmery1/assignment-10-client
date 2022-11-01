import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/course-categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div className='sidebar'>
        <h2>Course Overview</h2>
        <div>
                {
                    categories.map(category => <h5 key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </h5>)
                    
                }
            </div>
            
        </div>
    );
};

export default Sidebar;