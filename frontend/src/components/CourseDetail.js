import React, { useEffect, useState } from "react";
import { inscribirCurso } from "../api/Courses";
import "./CourseDetails.css";
import { deleteCursoById, getCursoById } from "../api/Users";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [message, setMessage] = useState("");

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
      }
      setMessage("Te has inscrito exitosamente al curso");
    } catch (error) {
      setMessage("Error inscribiendo al curso.");
    }
  };
  console.log(course);

  const handleDelete = () => {
    deleteCursoById(id);
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
    </div>
  );
};

export default CourseDetail;
