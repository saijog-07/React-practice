import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp.js';
import BookManagement from './BookManagement';
import BookAdd from './BookAdd';
import './App.css';
import BookEdit from './BookEdit.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/books" element={<BookManagement />} />
        <Route path="/books/add" element={<BookAdd />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/books/:isbn" element={<BookEdit />} />
      </Routes>
    </Router>
  );
}

export default App;