// src/components/CourseCard.js
import React from "react";
import { Link } from "react-router-dom";
import "./CourseCard.css"; // Estilos específicos para las tarjetas de cursos

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h2>{course.nombre_curso}</h2>
      <p>{course.descripcion}</p>
      <Link to={`/courses/${course.id_curso}`}>Ver detalles del curso</Link>
    </div>
  );
};

export default CourseCard;
