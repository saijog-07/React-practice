import { useState } from 'react';
import api from '../api';

export default function GetBook() {
  const [isbn, setIsbn] = useState('');
  const [book, setBook] = useState(null);

  const fetchBook = async () => {
    try {
      const res = await api.get(`/book/${isbn}`);
      setBook(res.data);
    } catch (err) {
      alert('Book not found or unauthorized');
    }
  };

  return (
    <div>
      <h2>Get Book</h2>
      <input placeholder="ISBN" onChange={e => setIsbn(e.target.value)} />
      <button onClick={fetchBook}>Fetch</button>
      {book && <pre>{JSON.stringify(book, null, 2)}</pre>}
    </div>
  );
}
