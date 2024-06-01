import React from 'react';

const Home = ({ courses }) => {
  return (
    <div>
      <h1>Welcome to the Course Management System</h1>
      <div>
        {courses.length ? (
          courses.map(course => (
            <div key={course.id}>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
            </div>
          ))
        ) : (
          <p>No courses available</p>
        )}
      </div>
    </div>
  );
};

export default Home;