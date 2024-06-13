import { useEffect, useState } from "react";
import React from "react";
import CourseCard from "../components/CourseCard";
import { getCursos } from "../api/Users";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCursos();
        setCourses(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {}, [courses]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Mis Cursos</h2>
      <div className="course-list">
        {courses.length ? (
          courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p>No tienes cursos aún.</p>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
