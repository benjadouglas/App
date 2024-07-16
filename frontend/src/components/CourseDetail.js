import React, { useEffect, useState } from "react";
import { inscribirCurso } from "../api/Courses";
import "./CourseDetails.css";
import { deleteCursoById, getCursoById, isadmin } from "../api/Users";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [message, setMessage] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  // const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const getCurso = async () => {
      const result = await getCursoById(id);
      setCourse(result);
    };
    getCurso();

    // const checkAdmin = async () => {
    //   const admin = await isadmin();
    //   setIsAdmin(admin);
    // };
    // checkAdmin();
  }, [id]);

  const handleInscripcion = async () => {
    try {
      const response = await inscribirCurso(id);
      if (response !== "success") {
        setMessage("Error al inscribirte al curso");
      } else {
        setMessage("Te has inscrito exitosamente al curso");
      }
    } catch (error) {
      setMessage("Error inscribiendo al curso.");
    }
  };

  const handleDelete = () => {
    deleteCursoById(id);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setMessage("No se ha seleccionado ningún archivo.");
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage("Archivo subido exitosamente.");
      } else {
        setMessage("Error al subir el archivo.");
      }
    } catch (error) {
      setMessage("Error al subir el archivo.");
    }
  };

  return (
    <div className="course-details-container">
      <div className="course-details-content">
        <div className="course-details">
          <h2>{course.nombre_curso}</h2>
          <p>{course.descripcion}</p>
          <br />
          <p>Costo: {course.precio}</p>
          <div>
            <p>Fecha de inicio: {course.fecha_inicio}</p>
            <p>Fecha de fin: {course.fecha_fin}</p>
          </div>
          <div>
            <button onClick={handleInscripcion}>Inscribirse</button>
            <button onClick={handleDelete} className="delete-button">
              Eliminar
            </button>
          </div>
          {message && <p className="message">{message}</p>}
        </div>
        <div className="comments-section">
          <h3>Comentarios</h3>
          <form onSubmit={handleCommentSubmit}>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Escribe tu comentario"
            />
            <button type="submit">Agregar Comentario</button>
          </form>
          <div className="comments-list">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))
            ) : (
              <p>No hay comentarios aún.</p>
            )}
          </div>
        </div>
      </div>
      {/* {isAdmin && ( */}
        <div className="upload-section">
          <h3>Subir Archivos</h3>
          <form onSubmit={handleFileUpload}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Subir Archivo</button>
          </form>
        </div>
      {/* )} */}
    </div>
  );
};

export default CourseDetail;
