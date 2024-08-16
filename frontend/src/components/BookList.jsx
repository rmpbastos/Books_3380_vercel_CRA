import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';


// https://books-3380-vercel-api.vercel.app
// http://localhost:5000


const BookList = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch books from the backend
        axios.get('https://books-3380-vercel-api.vercel.app')
          .then(res => {
            setBooks(res.data);
          })
          .catch(error => {
            console.error('There was an error fetching the books!', error);
          });
      }, []);

    // Update the state by removing the deleted book
    const handleDeleteBook = (id) => {
        setBooks(books.filter(book => book._id !== id));
    };

      const bookList =
      books.length === 0
        ? 'there is no book record!'
        : books.map((book, k) => (
          <BookCard 
              book={book} 
              key={k}
              onDelete={handleDeleteBook} />));


    return (

        <div className='BookList'>
            <div className='container'>
                <div className='row'>
                <div className='col-md-12'>
                        <br />
                        <h2 className='display-4 text-center'>Books List</h2>
                    </div>
                    <div className="col-md-12">
                        <br />
                        <h2 className="counter"> <p>{books.length}</p></h2>
                    </div>

                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-end">
                            <Link
                                to="/create-book"
                                className="btn btn-outline-warning"
                            >
                                + Add New Book
                            </Link>
                        </div>
                    </div>

                </div>
                <br />
                <hr />

                <div className='list'>{bookList}</div>

            </div>

        </div>


    //     <div className="App">
    //     <h1>Book List</h1>
    //     {books.length > 0 ? (
    //       <ul>
    //         {books.map((book, index) => (
    //           <li key={index}>
    //             <strong>Title:</strong> {book.title}<br />
    //             <strong>Author:</strong> {book.author}<br />
    //             <strong>Description:</strong> {book.description}
    //           </li>
    //         ))}
    //       </ul>
    //     ) : (
    //       <p>No books available.</p>
    //     )}
    //   </div>


    );


};

export default BookList;