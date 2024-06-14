import React, { useState } from "react";
import { handleLogin } from "../api/Users";

const LoginUsername = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(""); // Estado para el mensaje de login

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await handleLogin(username, password);
      if (response.status === "success") {
        setLoginMessage("Inicio de sesión exitoso."); // Mensaje de éxito
        // Aquí podrías redirigir al usuario a otra página si el inicio de sesión fue exitoso
      } else {
        setLoginMessage(response.message || "Error al iniciar sesión."); // Mensaje de error del servidor
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      setLoginMessage("Error al iniciar sesión. Inténtalo de nuevo más tarde."); // Manejo de errores locales
    }
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
      {loginMessage && <p>{loginMessage}</p>} {/* Mostrar mensaje de login */}
    </div>
  );
};

export default LoginUsername;
