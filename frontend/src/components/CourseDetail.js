import React, { useEffect, useState } from "react";
import { inscribirCurso } from "../api/Courses";
import "./CourseDetails.css";
import { deleteCursoById, getCursoById } from "../api/Users";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [message, setMessage] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getCurso = async () => {
      const result = await getCursoById(id);
      setCourse(result);
    };
    getCurso();
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
    console.log(comment);
  };



  return (
    <div className="course-details-container">
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
        {message && <p>{message}</p>}
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
  );
};

export default CourseDetail;
