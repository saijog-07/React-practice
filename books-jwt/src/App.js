import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AddBook from './pages/AddBook';
import GetBook from './pages/GetBook';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/login">Login</Link> | 
        <Link to="/register">Register</Link> | 
        <Link to="/add-book">Add Book</Link> | 
        <Link to="/get-book">Get Book</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/get-book" element={<GetBook />} />
      </Routes>
    </Router>
  );
}

export default App;
