import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leftsidnav = () => {
    const [Categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/new-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    })
    return (
        <div>
            <h4>all Category={Categories.length}</h4>
            {
                Categories.map(Category => <p key={Category.id}>
                    <Link to={`/Category/${Category.id}`}>{Category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default Leftsidnav;