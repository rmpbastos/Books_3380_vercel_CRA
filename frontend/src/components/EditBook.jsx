import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditBook = () => {
    const { id } = useParams(); // Get the book ID from the URL parameters
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the existing book data to populate the form
        axios.get(`https://books-3380-vercel-api.vercel.app/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setAuthor(res.data.author);
                setDescription(res.data.description);
            })
            .catch(err => console.error('Error fetching book:', err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedBook = { title, author, description };

        axios.put(`https://books-3380-vercel-api.vercel.app/${id}`, updatedBook)
            .then(() => navigate('/'))
            .catch(err => console.error('Error updating book:', err));
    };

    return (
        <div className='CreateBook'>
            <div className="container">
                <div className="row">

                    <div className="col-md-8 m-auto">
                        <br />
                        <Link className="btn btn-info float-left" to="/">
                            Show Book List
                        </Link>
                    </div>

                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Edit Book</h1>
                        <p className="lead text-center">Update book information</p>

                        <form onSubmit={handleSubmit}>

                            <div className="form-group">
                                <input 
                                    className='form-control'
                                    type='text'
                                    placeholder='Title of the Book'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <br />

                            <div className="form-group" >
                                <input 
                                    className='form-control'
                                    type='text'
                                    placeholder='Author'
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                />
                            </div>

                            <br />

                            <div className="form-group">
                                <input 
                                    className='form-control'
                                    type='text'
                                    placeholder='Describe this book'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <input
                                type="submit"
                                value="Update Book"
                                className="btn btn-info btn-block mt-4" 
                            />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EditBook;
