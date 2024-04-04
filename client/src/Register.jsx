import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function RegisterForm() {
  // State variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [color, setColor] = useState('');
  const navigate = useNavigate()

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ name, email, password });

    const defaultColor = 'Blue'

    axios.post('http://localhost:3001/register', { name, email, password, defaultColor })
    .then(result => {
      console.log(result)
      // Go back to the login page after registering
      navigate('/login')
    })
    .catch(err => console.log(err))

    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
    setColor('');
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 rounded">
        <h2 className="mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder='John Doe'
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='john.doe@gmail.com'
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='***'
            />
          </div>

          <button type="submit" className="btn btn-primary">Register</button>
        </form>

        <div className="mt-4">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
