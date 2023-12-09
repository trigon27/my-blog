import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function login(ev) {
    ev.preventDefault();

    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    if (response.ok) {
      // Redirect to home page
      navigate('/');
    } else {
      alert('Wrong credentials');
    }
  }

  return (
    <div>
      <form className="login" onSubmit={login}>
        <h1>Log in</h1>
        <input
          type="text"
          placeholder="user name"
          value={userName}
          onChange={(ev) => setUserName(ev.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button>log in</button>
      </form>
    </div>
  );
};

export default Login;
