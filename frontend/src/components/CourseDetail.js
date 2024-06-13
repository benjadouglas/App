// src/components/CourseDetail.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCursoById } from "../api/Users";
import { useState } from "react";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    const getCurso = async () => {
      const result = await getCursoById(id);
      setCourse(result);
    };
    getCurso();
  }, [id]);

  return (
    <div className="course-detail">
      <h2>{course.nombre_curso}</h2>
      <p>{course.descripcion}</p>
      <div className="course-info"></div>
      {/* <button onClick={() => onEnroll(course.id)}>Enroll</button> */}
    </div>
  );
};

export default CourseDetail;
