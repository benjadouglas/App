import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handleSignUp } from "../api/Users";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = handleSignUp(username, mail, password);
    console.log(response);
  };

  return (
    <div className="signup-container" style={{ textAlign: "center" }}>
      <h2>Signup</h2>
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
        <label htmlFor="mail">Email:</label>
        <input
          type="mail"
          id="mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
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
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
