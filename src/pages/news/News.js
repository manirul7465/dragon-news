import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const News = () => {
    const news = useLoaderData();

    const { title, details, image_url, category_id } = news;
    return (
        <div>
            <h1>this is news{news.title}</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>

                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">all news in this category</Button>
                    </Link>


                </Card.Body>
            </Card>
        </div>
    );
};

export default News;