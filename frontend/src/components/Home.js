import React from 'react';
import CourseCard from './CourseCard';
import './Home.css'; // Estilos específicos para la cuadrícula

const Home = ({ courses }) => {
  return (
    <div>
      <h1>Welcome to the Course Management System</h1>
      <div className="course-grid">
        {courses.length ? (
          courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p>No courses available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
