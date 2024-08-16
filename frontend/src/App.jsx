import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'


function App() {
  
  const [books, setBooks] = useState([]);

  // axios.defaults.withCredentials = true;

  useEffect(() => {
    // Fetch books from the backend
    axios.get('https://books-3380-vercel-api.vercel.app')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the books!', error);
      });
  }, []);

  
  return (
    <div className="App">
      <h1>Book List</h1>
      {books.length > 0 ? (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <strong>Title:</strong> {book.title}<br />
              <strong>Author:</strong> {book.author}<br />
              <strong>Description:</strong> {book.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
}

export default App;
