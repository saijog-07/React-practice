import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ username: '', password: '', role: 'USER' });
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:8085/api/auth/register', form);
      alert('Registration successful');
      navigate('/login');
    } catch (err) {
      alert('Error during registration');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <select onChange={e => setForm({ ...form, role: e.target.value })}>
        <option value="USER">USER</option>
        <option value="ADMIN">ADMIN</option>
      </select>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
