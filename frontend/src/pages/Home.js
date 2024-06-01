import React from 'react';
import Home from '../components/Home';
import useCourses from '../hooks/useCourses';

const HomePage = () => {
  const courses = useCourses();

  return (
    <div>
      <Home courses={courses} />
    </div>
  );
};

export default HomePage;