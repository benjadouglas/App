// src/pages/MyCoursesPage.js
import React from 'react';
import CourseCard from '../components/CourseCard';
import useCourses from '../hooks/useCourses';

const MyCourses = () => {
  const { courses, loading, error } = useCourses();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Mis Cursos</h2>
      <div className="course-list">
        {courses.length ? (
          courses.map(course => (
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
