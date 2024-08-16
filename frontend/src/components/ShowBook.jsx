import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`https://books-3380-vercel-api.vercel.app/${id}`)
            .then(res => setBook(res.data))
            .catch(err => console.error('Error fetching book:', err));
    }, [id]);

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <div className="card-container">
            <img 
                src="https://images.unsplash.com/photo-1491841573634-28140fc7ced7" 
                alt="Books"
                height="200"
            />
            <div className='desc'>
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
            </div>
        </div>
    );
};

export default ShowBook;