import React, { useState } from "react";
import { getCursos, handleLogin } from "../api/Users";

const LoginUsername = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(username, password);
  };

  return (
    <div className="login-container" style={{ textAlign: "center" }}>
      <h2>Login</h2>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "300px", margin: "0 auto" }}
      >
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
      {/* <p>¿No tienes una cuenta? <Link to="/signup">Regístrate</Link></p> */}
    </div>
  );
};

export default LoginUsername;
