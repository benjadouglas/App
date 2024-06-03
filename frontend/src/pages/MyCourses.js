// src/pages/MyCoursesPage.js
import React from 'react';
import CourseCard from '../components/CourseCard';
import useCourses from '../hooks/useCourses';
import useUser from '../hooks/useUser';

const MyCourses = () => {
  const { courses, loading, error } = useCourses();
  const { user } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const enrolledCourses = courses.filter(course => user.enrolledCourses.includes(course.id));

  return (
    <div>
      <h2>Mis Cursos</h2>
      <div className="course-list">
        {enrolledCourses.length ? (
          enrolledCourses.map(course => (
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
