import React from 'react';
import CourseCard from '../components/CourseCard';
import useCourses from '../hooks/useCourses';

const MyCoursesPage = () => {
  const courses = useCourses();

  return (
    <div>
      <h2>Mis Cursos</h2>
      <div className="course-list">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default MyCoursesPage;
