import React from 'react'

const Login = () => {
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
