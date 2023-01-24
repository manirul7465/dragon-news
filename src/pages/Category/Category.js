import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Newssummerycard from '../shared/Newssummerycard.js/Newssummerycard';

const Category = () => {
    const categorynews = useLoaderData()
    return (
        <div>
            <h1>cata{categorynews.length}</h1>
            {
                categorynews.map(news => <Newssummerycard
                    key={news._id}
                    news={news}
                >

                </Newssummerycard>)
            }
        </div>
    );
};

export default Category;