import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 

function LoginForm() {
  // State variables to store form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ email, password });
    
    axios.post('https://flashcall-interview-task-api.vercel.app/login', { email, password })
    .then(result => {
      console.log(result)

      if (result.data === 'Success! Logged in.') {
        navigate('/home')
      }  
    })
    .catch(err => console.log(err))

    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 rounded">
        <h2 className="mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
        </form>

        <div className="mt-4">
          <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
