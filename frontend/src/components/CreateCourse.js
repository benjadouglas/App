import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { createCurso } from "../api/Users";

const CreateCourse = () => {
  const [name, setName] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const navigate = useNavigate(); // Hook para navegación
  const { user } = useAuth(); // Obtener el estado de autenticación del contexto

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user) {
      navigate('/loginu'); // Redirigir a la página de inicio de sesión si no está autenticado
      return;
    }
    createCurso(name, descripcion, precio);
  };

  return (
    <div className="login-container" style={{ textAlign: "center" }}>
      <h2>Create Course</h2>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "300px", margin: "0 auto" }}
      >
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <label htmlFor="descripcion">Descripcion:</label>
        <input
          type="text"
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <label htmlFor="precio">Precio:</label>
        <input
          type="text"
          id="precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
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
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;
