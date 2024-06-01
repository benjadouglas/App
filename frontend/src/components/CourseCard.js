import React from 'react';
import './CourseCard.css'; // Estilos específicos para las tarjetas de cursos

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseCard;
