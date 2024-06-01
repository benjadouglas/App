import { useState, useEffect } from 'react';
import { mockCourses } from '../mockData'; // Importa los datos ficticios

const useCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Simula una llamada a la API con datos ficticios
    const fetchCourses = async () => {
      // Simula una pequeña demora para imitar una llamada a la API
      await new Promise(resolve => setTimeout(resolve, 500));
      setCourses(mockCourses);
    };

    fetchCourses();
  }, []);

  return courses;
};

export default useCourses;
