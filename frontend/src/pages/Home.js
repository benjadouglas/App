import React from 'react';
import Home from '../components/Home';
import useCourses from '../hooks/useCourses';

const HomePage = () => {
  const courses = useCourses(); // Obtener todos los cursos

  return (
    <div>
      <Home courses={courses} />
    </div>
  );
};

export default HomePage;
