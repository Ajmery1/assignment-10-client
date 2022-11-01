import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const Coursedetails = useLoaderData();
    return (
        <div>
            <h2>this is home component: {Coursedetails.length}</h2>
        </div>
    );
};

export default Home;