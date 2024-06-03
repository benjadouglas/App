
import React from 'react';
import Home from '../components/Home';
import useCourses from '../hooks/useCourses';

const HomePage = () => {
  const { courses, loading, error } = useCourses(); // Obtener todos los cursos

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Home courses={courses} />
    </div>
  );
};

export default HomePage;
