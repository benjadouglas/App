import React, { useState } from 'react';
import { inscribirCurso } from '../api/Courses';
import  "./CourseDetails.css"; 

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
    <div className="course-details-container">
      <div className="course-details">
        <h3>Seguro quieres inscribirte al curso?</h3>
        <button onClick={handleInscripcion}>Inscribirse</button>
        {message && <p>{message}</p>}
      </div>
    </div>  
    
  );
};

export default CourseDetails;
