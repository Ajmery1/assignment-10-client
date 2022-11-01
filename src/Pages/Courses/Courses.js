import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const course = useLoaderData();
    return (
        <div>
            <h2>All courses: {course.length} </h2>
        </div>
    );
};

export default Courses;