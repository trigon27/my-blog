import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  async function login(ev) {
    ev.preventDefault();

    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ userName, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.ok) {
      // Redirect to home page
      response.json().then((UserInfo) => {
        setUserInfo(UserInfo);
        navigate("/");
      });
    } else {
      alert("Wrong credentials");
    }
  }

  return (
    <div className="loginContainer">
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
