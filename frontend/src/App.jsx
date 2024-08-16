import React, { useState, useEffect } from 'react';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import ShowBook from './components/ShowBook';
import EditBook from './components/EditBook';




// https://books-3380-vercel-api.vercel.app


function App() {
  
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BookList />} />
        <Route path="/create-book" element={<AddBook />} />
        <Route path="/show-book/:id" element={<ShowBook />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
