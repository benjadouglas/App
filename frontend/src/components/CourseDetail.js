import React, { useState } from 'react';
import { inscribirCurso } from '../api/Courses';

const CourseDetails = ({ course }) => {
  const [message, setMessage] = useState('');

  const handleInscripcion = async () => {
    try {
      const response = await inscribirCurso(course.id);
      setMessage(response.message);
    } catch (error) {
      setMessage('Error inscribiendo al curso.');
    }
  };

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <button onClick={handleInscripcion}>Inscribirse</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CourseDetails;
