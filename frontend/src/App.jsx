import React, { useState, useEffect } from 'react';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import BookList from './components/BookList';




// https://books-3380-vercel-api.vercel.app


function App() {
  
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BookList />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
