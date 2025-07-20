import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../api';

export default function AddBook() {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    author: '',
    isbn: '',
    publicationYear: ''
  });

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "ADMIN") {
      alert("Access denied: Only ADMIN can add books.");
      navigate("/"); // Redirect non-admins
    }
  }, [navigate]);

  const addBook = async () => {
    try {
      const payload = {
        ...book,
        publicationYear: parseInt(book.publicationYear)
      };
      const res = await api.post('/book', payload);
      alert('Book added: ' + res.data.title);
    } catch (err) {
      alert('Failed to add book. ' + err.response?.data?.message || '');
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      <input
        placeholder="Title"
        onChange={e => setBook({ ...book, title: e.target.value })}
      /><br />
      <input
        placeholder="Author"
        onChange={e => setBook({ ...book, author: e.target.value })}
      /><br />
      <input
        placeholder="ISBN"
        onChange={e => setBook({ ...book, isbn: e.target.value })}
      /><br />
      <input
        placeholder="Publication Year"
        type="number"
        onChange={e => setBook({ ...book, publicationYear: e.target.value })}
      /><br />
      <button onClick={addBook}>Add</button>
    </div>
  );
}
