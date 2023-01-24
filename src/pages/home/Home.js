import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Newssummerycard from '../shared/Newssummerycard.js/Newssummerycard';

const Home = () => {
    const allnews = useLoaderData();
    return (
        <div>
            <h1>Home{allnews.length}</h1>
            {
                allnews.map(news => <Newssummerycard

                    key={news._id}
                    news={news}
                ></Newssummerycard>)
            }
        </div>
    );
};

export default Home;